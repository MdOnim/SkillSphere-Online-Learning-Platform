"use client";

import { authClient } from "@/lib/auth-client";
import {Envelope} from "@gravity-ui/icons";
import {Button, Input, Label, Modal, Surface, TextField} from "@heroui/react";
import { Edit } from "lucide-react";
import { FaUser } from "react-icons/fa";

export function ModalUser() {

  const onSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const image = e.target.image.value;
    console.log({name,image},"user data for update profile");

await authClient.updateUser({
    image,
    name,
    
})
    
  };



  return (
    <Modal>
      <Button variant="secondary"> <Edit></Edit> Update Your Profile</Button>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                <FaUser className="size-5" />
              </Modal.Icon>
              <Modal.Heading>Update Your Profile</Modal.Heading>
              
            </Modal.Header>
            <Modal.Body className="p-6">
              <Surface variant="default">
                <form onSubmit={onSubmit} className="flex flex-col gap-4">
                  
                  
                  <TextField className="w-full" name="name" type="text" isRequired  >
                    <Label>Name</Label>
                    <Input placeholder="Enter your name" required />
                  </TextField>



                  <TextField className="w-full" name="image" type="url" isRequired >
                    <Label>Img URL</Label>
                    <Input placeholder="Enter your img url" required />
                  </TextField>

                  <Modal.Footer>
              <Button slot="close" variant="secondary">
                Cancel
              </Button>
              <Button type="submit" slot="close">Save</Button>
            </Modal.Footer>
                 
                </form>
              </Surface>
            </Modal.Body>
            
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}