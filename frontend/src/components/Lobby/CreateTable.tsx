import React, { useState, FormEventHandler} from "react";

type CreateProps = {
    // potentially other user info might just use ID_Token in header instead,
    handleSubmit: (e: React.FormEvent<HTMLButtonElement>, userName: string) => void
}

export default function CreateTable(props: CreateProps) {
    return (
        <table>
            <thead>
                Create New Table
            </thead>
            <tr>
                <button type='submit' onSubmit={e=>handleSubmit(e,userName)}>Create New Table</button>
            </tr>
        </table>
    );
}