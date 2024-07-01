"use client"
import { useEffect, useState } from "react";
import axios from "axios";
import CardItem from "../ui/card-item";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export function UserCards() {
  const [users, setUsers] = useState<any[]>([]);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/user/');
      setUsers(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  useEffect(() => {
    console.log(users);
  }, [users]);

  return (
    <div className="grid grid-cols-1 gap-6 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {users.map((user, index) => (
        <Card key={index} className="flex flex-col items-center p-6 bg-background rounded-lg shadow-md">
          <Avatar className="mb-4">
            <AvatarImage src="/placeholder-user.jpg" />
            <AvatarFallback>{user.initials}</AvatarFallback>
          </Avatar>
          <div className="text-center">
            <h3 className="text-lg font-semibold">{user.name}</h3>
            <p className="text-sm text-muted-foreground">{user.phone}</p>
            <p className="text-sm text-muted-foreground">{user.email}</p>
          </div>
        </Card>
      ))}
    </div>
  )
}
