import { UnstyledButton, Group, Avatar, Text, rem, Button } from '@mantine/core';
import { IconLogout } from '@tabler/icons-react';
import classes from './UserButton.module.css';
import { useRouter } from 'next/navigation';

export function UserButton() {

    const router = useRouter();

  const handleLogout = () => {
    // Remove authToken from LocalStorage
    localStorage.removeItem('authtoken');

    // Redirect to the home page
    router.refresh()
  };
  return (
    <UnstyledButton className={classes.user}>
      <Group>
        <div style={{ flex: 1 }}>
          <Text size="sm" fw={500}>
            Harriette Spoonlicker
          </Text>

          <Text c="dimmed" size="xs">
            hspoonlicker@outlook.com
          </Text>
        </div>
        <Avatar
          src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-8.png"
          radius="xl"
        />
        <IconLogout onClick={handleLogout} style={{ width: rem(14), height: rem(14) }} stroke={1.5} />
      </Group>
    </UnstyledButton>
  );
}