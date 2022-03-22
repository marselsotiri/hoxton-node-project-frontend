export interface UserI {
    id: number;
    fullName: string;
    email: string;
    password: string;
    phoneNr: string;
    userStatus: string;
    profilePhoto: string;
    conversations: ConversationI[];
}

export interface ConversationI {
    id: number;
    userId?: number;
    participantId?: number;
    user?: UserI;
    participant?: UserI;
    messages: MessageI[];
}

export interface MessageI {
    id: number;
    conversationId?: number;
    textMessage: string;
    userId?: number;
    user?: UserI;
    conversation?: ConversationI;
}
