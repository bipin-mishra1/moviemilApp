import styled from "styled-components";

export const Wrapper = styled.div`
margin:20px 50px;
padding:10px;
button{
    outline:none;
    margin-bottom: 20px;
    box-shadow:inset 0px 0px 0px -50px #e184f3;
	background:linear-gradient(to bottom, #c123de 5%, #a20dbd 100%);
	background-color:#c123de;
	border-radius:42px;
	border:1px solid #bd4ad4;
	display:inline-block;
	cursor:pointer;
	color:#ffffff;
	font-family:Arial;
	font-size:15px;
	font-weight:bold;
	padding:8px 24px;
	text-decoration:none;
	text-shadow:0px 0px 0px #9b14b3;

    :hover {
        background:linear-gradient(to bottom, #a20dbd 5%, #c123de 100%);
        background-color:#a20dbd;
    }
    :active {
        position:relative;
        top:1px;
    }
}

.player-wrapper {
    color:white;
    font-weight:600;
    font-family:monospace;
    font-size:larger;
    position: relative;
    padding-top: 56.25%; /* 720 / 1280 = 0.5625 */
    border:6px solid #8277B3;
    p{
        position:absolute;
        top:50%;
        left:40%;
    }
  }
  
.react-player {
    position: absolute;
    top: 0;
    left: 0;
}

@media screen and (max-width:380px){
    margin:10px 20px;
    padding:10px;
}


`;

