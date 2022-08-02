import { useEffect } from "react";

function displayMessages(messages){
    return messages.map((msg) => {
        const user = whichUser(msg);

        return msg.message_body !== null ? (
            <Chatfeed
            key={msg.id}
            room={roomData}
            user={user}
            onDeleteMessage={handleDeleteClick}
            onUpdateMessage={handleUpdateMessage}
            currentUser={currentUser}
            allUsers={users}
            message={msg}
            />
        ) : (
            <div></div>
        );
    });
}
function handleUpdateMessage(updatedMessageObj){
    const updatedMessages = messages.map((message) => {
        if(message.id === updatedMessageObj.id) {
            return updatedMessageObj;
        } else {
            return message;
        }
    });
    handleMessageUpdate(updatedMessages);
}

function handleDeleteClick(id){
    fetch(`/messages/${id}`, {
        method: 'DELETE',
    });

    const updatedMessages = messages.filter((message) => message.id !== id);
    handleMessageUpdate(updatedMessages);    
}

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

return (
    <div className="chat-room-display">
        <div className="chat-board-title">
            {/* {`Hi, ${user.name.toUpperCase()}`} */}
            <p>{roomData.room_name}</p>
            <h4>Chatroom Members</h4>
            <Search search={search} setSearch={setSearch}></Search>{" "}
        </div>
        <div className="users">
            {getData !== null ? displayUsers(users) : null}
        </div>
        <div className="chat-container">
            <div className="chat-main">
                <div id="messages" className="message-feed">
                    <div>
                        {messages !== null && messages.length > 0 ? (
                            displayMessages(messages)
                        ) : (
                            <h3 className="blank-room">This room has no message yet</h3>
                        )}
                        <div ref={bottomRef} />
                    </div>
                </div>
            </div>
        </div>
    </div>
);