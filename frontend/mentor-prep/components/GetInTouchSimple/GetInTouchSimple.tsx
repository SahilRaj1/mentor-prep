"use client"
import React, { useState } from 'react';
import { TextInput, Textarea, SimpleGrid, Group, Title, Button } from '@mantine/core';

interface FormValues {
  title: string;
  description: string;
}

export function GetInTouchSimple() {
  const [formValues, setFormValues] = useState<FormValues>({
    title: '',
    description: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (name: string, value: string) => {
    setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const handleBlur = (name: string, value: string) => {
    // Simple validation, you can customize this based on your requirements
    if (value.trim().length === 0) {
      setErrors((prevErrors) => ({ ...prevErrors, [name]: 'This field is required' }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    // Custom validation logic
    const newErrors: Record<string, string> = {};
    if (formValues.title.trim().length === 0) {
      newErrors.title = 'This field is required';
    }
    if (formValues.description.trim().length === 0) {
      newErrors.description = 'This field is required';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Handle form submission logic here
    console.log('Title:', formValues.title);
    console.log('Description:', formValues.description);
  };

  return (
    <div className="flex justify-center">
    <form onSubmit={handleSubmit} className='w-[45em]'>
      <Title
        order={2}
        size="h1"
        style={{ fontFamily: 'Greycliff CF, var(--mantine-font-family)' }}
        fw={900}
        ta="center"
      >
        Get in touch
      </Title>
       <TextInput
          label="Title"
          placeholder="Title"
          mt="md"
          name="title"
          variant="filled"
          value={formValues.title}
          onChange={(event) => handleChange('title', event.currentTarget.value)}
          onBlur={(event) => handleBlur('title', event.currentTarget.value)}
          error={errors.title}
        />
        <Textarea
          mt="md"
          label="Description"
          placeholder="Enter your Description here"
          maxRows={10}
          minRows={5}
          autosize
          name="descritption"
          variant="filled"
          value={formValues.description}
          onChange={(event) => handleChange('description', event.currentTarget.value)}
          onBlur={(event) => handleBlur('description', event.currentTarget.value)}
          error={errors.description}
        />

      <Group justify="center" mt="xl">
        <Button type="submit" size="md">
          Send message
        </Button>
      </Group>
    </form>
    </div>
  );
}
