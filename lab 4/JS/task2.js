document.getElementById('send1').addEventListener('click', function() {
    sendMessage('userA');
});

document.getElementById('send2').addEventListener('click', function() {
    sendMessage('userB');
});

function sendMessage(user)
{
    let chatBox = document.getElementById('chats');
    let messageInput = user === 'userA' ? document.getElementById('userA') : document.getElementById('userB');
    let messageText = messageInput.value.trim();

    if (messageText === "") 
    {
        return;
    }

    let messageElement = document.createElement('div');
    messageElement.className = 'message ' + user;
    messageElement.innerText = (user === 'userA' ? 'userA' : 'userB') + ": " + messageText;
    chatBox.appendChild(messageElement);

    messageInput.value = "";
}
