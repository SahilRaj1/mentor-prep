import { UnstyledButton, Group, Avatar, Text, rem, Button, Tooltip, Modal } from '@mantine/core';
import { IconLogout } from '@tabler/icons-react';
import classes from './UserButton.module.css';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export function UserButton() {
  const router = useRouter();
  const [isModalOpen, setModalOpen] = useState(false);

 
  const handleLogout = () => {
    setModalOpen(true);
  };

  const handleConfirmLogout = () => {
    // Remove authToken from LocalStorage
    localStorage.removeItem('authtoken');

    // Redirect to the home page
    router.refresh();

    // Close the modal
    setModalOpen(false);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <UnstyledButton className={classes.user}>
      <Group>
        <Avatar
          src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-8.png"
          radius="lg"
        />
        <Tooltip label="Sign Out" position="bottom">
          <IconLogout
            onClick={handleLogout}
            style={{ width: rem(20), height: rem(20) }}
            stroke={1.5}
          />
        </Tooltip>
      </Group>

      <Modal
        title="Confirm Sign Out"
        opened={isModalOpen}
        onClose={handleCloseModal}
        size="sm"
      >
        <Text>Are you sure you want to sign out?</Text>
        <Group align="right">
          <Button onClick={handleCloseModal}>Cancel</Button>
          <Button color="red" onClick={handleConfirmLogout}>
            Sign Out
          </Button>
        </Group>
      </Modal>
    </UnstyledButton>
  );
}
