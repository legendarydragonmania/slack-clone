import React from 'react'
import styled from 'styled-components'
import FiberManualRecordRoundedIcon from '@mui/icons-material/FiberManualRecordRounded'
import CreateIcon from '@mui/icons-material/Create'
import SidebarOption from './SidebarOption'
import InsertCommentIcon from '@mui/icons-material/InsertComment'
import InboxIcon from '@mui/icons-material/Inbox'
import DraftsIcon from '@mui/icons-material/Drafts'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder'
import PeopleAltIcon from '@mui/icons-material/PeopleAlt'
import AppsIcon from '@mui/icons-material/Apps'
import FileCopyIcon from '@mui/icons-material/FileCopy'
import ExpandLessIcon from '@mui/icons-material/ExpandLess'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import AddIcon from '@mui/icons-material/Add'
import { db } from './firebase'
import { collection } from 'firebase/firestore'
import { useCollection } from 'react-firebase-hooks/firestore'
import { useUserContext } from './user_context'

const Sidebar = () => {
  const { myUser } = useUserContext()
  const colRef = collection(db, 'rooms')
  const [channels, loading, error] = useCollection(colRef)
  return (
    <SidebarContainer>
      <SidebarHeader>
        <SidebarInfo>
          <h2>{myUser.given_name} SLACK CHANNELS</h2>
          <h3>
            <FiberManualRecordRoundedIcon />
            {myUser.name}
          </h3>
        </SidebarInfo>
        <CreateIcon />
      </SidebarHeader>

      <SidebarOption Icon={InsertCommentIcon} title='Threads' />
      <SidebarOption Icon={InboxIcon} title='Mentions & reactions' />
      <SidebarOption Icon={DraftsIcon} title='Saved items' />
      <SidebarOption Icon={BookmarkBorderIcon} title='Channel browser' />
      <SidebarOption Icon={PeopleAltIcon} title='People & user groups' />
      <SidebarOption Icon={AppsIcon} title='Apps' />
      <SidebarOption Icon={FileCopyIcon} title='File browser' />
      <SidebarOption Icon={ExpandLessIcon} title='Show less' />

      <hr />
      <SidebarOption Icon={ExpandMoreIcon} title='Channels' />
      <hr />
      <SidebarOption Icon={AddIcon} addChannelOption title='Add Channel' />

      {channels?.docs.map((doc) => {
        return (
          <SidebarOption key={doc.id} id={doc.id} title={doc.data().name} />
        )
      })}
    </SidebarContainer>
  )
}

const SidebarContainer = styled.div`
  overflow-y: scroll;
  color: white;
  background-color: var(--slack-color);
  flex: 0.3;
  border-top: 1px solid #49274b;
  max-width: 260px;
  margin-top: 60px;

  /* Hide scrollbar for Chrome, Safari and Opera */
  ::-webkit-scrollbar {
    display: none;
  }

  /* Hide scrollbar for IE, Edge and Firefox */

  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  hr {
    margin-top: 10px;
    margin-bottom: 10px;
    border: 1px solid #49274b;
  }
`

const SidebarHeader = styled.div`
  display: flex;
  border-bottom: 1px solid #49174b;
  padding: 10px;

  > .MuiSvgIcon-root {
    cursor: pointer;
    padding: 3px;
    color: #49274b;
    font-size: 30px;
    background-color: white;
    border-radius: 999px;
  }
`

const SidebarInfo = styled.div`
  flex: 1;

  > h2 {
    font-size: 15px;
    font-weight: 900;
    margin-bottom: 5px;
  }

  > h3 {
    display: flex;
    font-size: 13px;
    font-weight: 400;
    align-items: center;

    .MuiSvgIcon-root {
      font-size: 14px;
      margin-top: 1px;
      margin-right: 2px;
      color: green;
    }
  }
`

export default Sidebar
