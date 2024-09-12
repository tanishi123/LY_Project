import React, { useState } from "react";
import { Box, Button, Input, Stack, Heading } from "@chakra-ui/react";

const ClassroomCreation = () => {
  const [className, setClassName] = useState("");
  const [description, setDescription] = useState("");

  const handleCreateClassroom = () => {
    // Implement your classroom creation logic here
    console.log("Class Name:", className, "Description:", description);
  };

  return (
    <Box maxW="sm" mx="auto" mt={10}>
      <Heading mb={6}>Create Classroom</Heading>
      <Stack spacing={4}>
        <Input
          placeholder="Classroom Name"
          value={className}
          onChange={(e) => setClassName(e.target.value)}
        />
        <Input
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <Button colorScheme="teal" size="md" onClick={handleCreateClassroom}>
          Create Classroom
        </Button>
      </Stack>
    </Box>
  );
};

export default ClassroomCreation;
