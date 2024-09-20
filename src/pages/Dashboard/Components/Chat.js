import React, { Component } from 'react';
import './ChatPage.css'; // Import your CSS file for styling
import { Avatar, Card } from 'theme-ui';
import Badge from '@mui/material/Badge';
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";

import { styled } from '@mui/material/styles';
import { Typography,Button } from '@mui/material';
import { Item } from 'semantic-ui-react';


const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        backgroundColor: '#44b700',
        color: '#44b700',
        boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
        '&::after': {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            animation: 'ripple 1.2s infinite ease-in-out',
            border: '1px solid currentColor',
            content: '""',
        },
    },
    '@keyframes ripple': {
        '0%': {
            transform: 'scale(.8)',
            opacity: 1,
        },
        '100%': {
            transform: 'scale(2.4)',
            opacity: 0,
        },
    },
}));

const SmallAvatar = styled(Avatar)(({ theme }) => ({
    width: 22,
    height: 22,
    border: `2px solid ${theme.palette.background.paper}`,
}));
class ChatPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: [], // Store messages here
            inputText: '',
            imageUrl:null, // Store input text
            data: [
                {
                    img: "https://source.unsplash.com/_7LbC5J-jw4/600x600",
                    name: "Rasmiranjan Mohanty",
                    message: "Hello Lms",
                    time: '8.10 pm'
                },
                {
                    img: "https://source.unsplash.com/_7LbC5J-jw4/600x600",
                    name: "Rasmiranjan Mohanty",
                    message: "Hello Lms",
                    time: '8.10 pm'
                },
                {
                    img: "https://source.unsplash.com/_7LbC5J-jw4/600x600",
                    name: "Rasmiranjan Mohanty",
                    message: "Hello Lms",
                    time: '8.10 pm'
                },
                {
                    img: "https://source.unsplash.com/_7LbC5J-jw4/600x600",
                    name: "Rasmiranjan Mohanty",
                    message: "Hello Lms",
                    time: '8.10 pm'
                },
                {
                    img: "https://source.unsplash.com/_7LbC5J-jw4/600x600",
                    name: "Rasmiranjan Mohanty",
                    message: "Hello Lms",
                    time: '8.10 pm'
                },
            ],
            showmessage:0
        };
        this.hiddenFileInputRef = React.createRef();

    }
     handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        if (selectedFile) {
          const imageUrl = URL.createObjectURL(selectedFile);
          this.setState({imageUrl});
        }
    
      };
    
    
     openFileInput = () => {
        this.hiddenFileInputRef.current.click();
      };


    handleTextChange = (event) => {
        this.setState({ inputText: event.target.value });
    };

    handleSendText = () => {
        const { messages, inputText,imageUrl } = this.state;
        if (inputText.trim() !== '') {
            const newMessage = {
                type: 'text',
                content: inputText,
            };
            this.setState({
                messages: [...messages, newMessage],
                inputText: '',
            });
        }
        else{
            const newMessage = {
                type: 'image',
                content: imageUrl,
            };
            this.setState({
                messages: [...messages, newMessage],
                imageUrl: '',
            });

        }
    };

    renderMessages = () => {
        const { messages } = this.state;
        return messages.map((message, index) => (
            <div key={index} className="message">
                {message.type === 'text' && <p>{message.content}</p>}
                {message.type === 'image' && <img style={{height:200,width:200}} src={message.content} alt={`Image ${index}`} />}
                {message.type === 'video' && (
                    <video controls>
                        <source src={message.content} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                )}
            </div>
        ));
    };

    render() {
        return (
            <div className="chat-page">
                <div className="side-drawer" style={{backgroundColor:'white'}}>
                    Message
                    <Paper
                  component="form"
                  style={{
                    display: "flex",
                    marginLeft: "auto",
                    width: "180px",
                    height: "30px",
                    marginTop: "4%",
                    boxShadow: "none",
                    border: "1px solid black",
                    borderRadius: "20px",
                    marginRight:30,marginBottom:14
                  }}
                >
                  <IconButton
                    type="button"
                    style={{ p: "150px" }}
                    aria-label="search"
                  >
                    <SearchIcon />
                  </IconButton>
                  <InputBase
                    style={{ flex: 1, fontSize: "15px" }}
                    placeholder="Search here"
                    inputProps={{ "aria-label": "Search here" }}
                  />
                </Paper>
                    {this.state.data.map((item, index) => {
                        return (
                            <Card onClick={()=>{
                                this.setState({showmessage:index})
                            }}>
                                <div style={{ display: "flex", gap: 5 }}>

                                    <StyledBadge
                                        overlap="circular"
                                        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                                        variant="dot"
                                    >
                                        <Avatar alt="Remy Sharp" src={item.img} />
                                    </StyledBadge>
                                    <Typography>{(item.name).slice(0, 10)}...</Typography>
                                    <Typography style={{ fontSize: 10, marginTop: 1, marginLeft: 6,whiteSpace:"nowrap" }}>{item.time}</Typography>



                                </div>
                                <Typography style={{ marginTop: "-10%", fontSize: 12, marginLeft: 55 ,whiteSpace:"nowrap"}}>{(item.message).slice(0, 19)}....</Typography>
                                <hr></hr>
                            </Card>
                        )
                    })
                    }
                </div>
               { <div className="chat-container">
                    <div className="messages-container">{this.renderMessages()}</div>
                    <div className="input-container">
                        <input
                            type="text"
                            placeholder="Type your message..."
                            value={this.state.inputText}
                            onChange={this.handleTextChange}
                        />
                         <Button onClick={this.openFileInput} style={{ backgroundColor: "#F5F5F5", color: "#000" }}>Upload Image <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 27 27" fill="none">
                <g clip-path="url(#clip0_301_5021)">
                  <path d="M22.5 6.75H13.5L11.25 4.5H4.5C3.2625 4.5 2.26125 5.5125 2.26125 6.75L2.25 20.25C2.25 21.4875 3.2625 22.5 4.5 22.5H22.5C23.7375 22.5 24.75 21.4875 24.75 20.25V9C24.75 7.7625 23.7375 6.75 22.5 6.75ZM22.5 20.25H4.5V9H22.5V20.25ZM9 14.6363L10.5863 16.2225L12.375 14.445V19.125H14.625V14.445L16.4137 16.2338L18 14.6363L13.5113 10.125L9 14.6363Z" fill="#8A8A8A" />
                </g>
                <defs>
                  <clipPath id="clip0_301_5021">
                    <rect width="27" height="27" fill="white" />
                  </clipPath>
                </defs>
              </svg>
                <input hidden type="file" multiple

                  ref={this.hiddenFileInputRef}
                  onChange={this.handleFileChange}

                /></Button>
                        
                        <button disabled={this.state.inputText===""} onClick={this.handleSendText}>Send</button>
                    </div>
                </div>}
            </div>
        );
    }
}

export default ChatPage;
