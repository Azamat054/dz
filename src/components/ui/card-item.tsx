import React from 'react'
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Card } from './card'

interface CardItemProps {
    name : string,
    phone: string,
    email: string
}

const CardItem: React.FC<CardItemProps> = ({ name, phone, email }) => {
  return (
    <Card className="flex flex-col items-center p-6 bg-background rounded-lg shadow-md">
        <Avatar className="mb-4">
            <AvatarImage src="/placeholder-user.jpg" />
            <AvatarFallback>JP</AvatarFallback>
        </Avatar>
        <div className="text-center">
            <h3 className="text-lg font-semibold">{name}</h3>
            <p className="text-sm text-muted-foreground">{phone}</p>
            <p className="text-sm text-muted-foreground">{email}</p>
        </div>
    </Card>
  )
}

export default CardItem