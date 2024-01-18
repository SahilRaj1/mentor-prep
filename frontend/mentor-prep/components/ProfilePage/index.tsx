// Import necessary libraries and dependencies
"use client"
import React, { useState, useEffect } from 'react';
import axios, { AxiosHeaders } from 'axios';
import jwt from 'jsonwebtoken'; // Import jwt library

// Define the UpdateProfile component
const UpdateProfile: React.FC = () => {
  // State to store form data
  const [formData, setFormData] = useState({
    name: '',
    bio: '',
    avatar: null,
    phone: '',
    twitter: '',
    linkedin: '',
  });

  // State to store the selected image file
  const [avatarFile, setAvatarFile] = useState<File | null>(null);

  const userId = localStorage.getItem("userId")
  const authtoken = localStorage.getItem("authtoken")
  // console.log(userId);
  

  // Fetch existing user data
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Make an API call to get the user data
        // Replace 'your_api_endpoint' with the actual endpoint
        if (userId && authtoken) {
          const response = await axios.get(`https://mentor-prep-rest-api.onrender.com/api/v1/mentees/${userId}`, {
            headers: {
              "auth-token": authtoken
            }
          });

          // Update the form data with the fetched values
          setFormData({
            name: response.data.data.mentee.user_id.profile.name || '',
            bio: response.data.data.mentee.user_id.profile.bio || "",
            avatar: response.data.data.mentee.user_id.profile.avatar || "",
            phone: response.data.data.mentee.user_id.profile.contact?.phone || "",
            twitter: response.data.data.mentee.user_id.profile.social_media?.twitter || "",
            linkedin: response.data.data.mentee.user_id.profile.social_media?.linkedin || "",
          });

          // Log the updated formData
          console.log(formData);
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchData();
  }, [userId, authtoken]); // Dependency on decodedToken ensures the useEffect runs when the token is decoded
  
  

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle image input changes
  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setAvatarFile(e.target.files[0]);
    }
  };

  // Handle social media input changes
  const handleSocialMediaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      // Create FormData object to handle file upload
      const formDataWithImage = new FormData();
      formDataWithImage.append('name', formData.name);
      formDataWithImage.append('bio', formData.bio);
      formDataWithImage.append('contact.phone', formData.phone);
      formDataWithImage.append('social_media.twitter', formData.twitter);
      formDataWithImage.append('social_media.linkedin', formData.linkedin);
      if (avatarFile) {
        formDataWithImage.append('avatar', avatarFile);
      }

      // Make a PUT request to update the user profile
      // Replace 'your_api_endpoint' with the actual endpoint
      const response = await axios.put(`https://mentor-prep-rest-api.onrender.com/api/v1/users/${userId}`, formDataWithImage, {
        headers: {
            "auth-token": authtoken,
            "Content-Type": "image/jpg"
        }});

      console.log('Profile updated successfully:', response.data);
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  // JSX for the UpdateProfile component
  return (
    <div className="container mx-auto mt-8">
      <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
        {/* Profile Name */}
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-600">
            Name
          </label>
          <input
          disabled
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            required
          />
        </div>

        {/* Bio */}
        <div className="mb-4">
          <label htmlFor="bio" className="block text-sm font-medium text-gray-600">
            Bio
          </label>
          <textarea
            id="bio"
            name="bio"
            value={formData.bio}
            onChange={handleInputChange}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>

        {/* Contact Phone */}
        <div className="mb-4">
          <label htmlFor="phone" className="block text-sm font-medium text-gray-600">
            Contact Phone
          </label>
          <input
            id="phone"
            name="contact.phone"
            value={formData.phone}
            onChange={handleInputChange}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>

        {/* Avatar - Image Input */}
        <div className="mb-4">
          <label htmlFor="avatar" className="block text-sm font-medium text-gray-600">
            Avatar
          </label>
          <input
            type="file"
            accept="image/*"
            id="avatar"
            name="avatar"
            onChange={handleAvatarChange}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="mb-4">
  <label htmlFor="twitter" className="block text-sm font-medium text-gray-600">
    Twitter
  </label>
  <input
    type="text"
    id="twitter"
    name="social_media.twitter"
    value={formData.twitter}
    onChange={handleSocialMediaChange}
    className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
  />
</div>

{/* Social Media - LinkedIn */}
<div className="mb-4">
  <label htmlFor="linkedin" className="block text-sm font-medium text-gray-600">
    LinkedIn
  </label>
  <input
    type="text"
    id="linkedin"
    name="social_media.linkedin"
    value={formData.linkedin}
    onChange={handleSocialMediaChange}
    className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
  />
</div>

        {/* Add a submit button */}
        <button type="submit" className="bg-blue-500 text-white p-2 rounded-md">
          Update Profile
        </button>
      </form>
    </div>
  );
};

export default UpdateProfile;
