import React from 'react'
import {useState, useEffect} from "react";
import '../Sidebar.css'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import CreateIcon from '@material-ui/icons/Create';
// import InsertCommentIcon from "@material-ui/icons/InsertComment";
import SidebarOption from "../components/SidebarOption";
// import DraftsIcon from '@material-ui/icons/Drafts';
// import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
// import FileCopyIcon from '@material-ui/icons/FileCopy';
// import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
// import AppsIcon from '@material-ui/icons/Apps';
// import ExpandLessIcon from '@material-ui/icons/ExpandLess';
// import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
// import InboxIcon from '@material-ui/icons/Inbox';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import AddIcon from '@material-ui/icons/Add';
import db from '../firebase';
import { useStateValue } from "../StateProvider";

function Sidebar() {
    const [channels, setChannels] = useState([]);
    // const [users, setUsers] = useState([]);
    const [{ user }] = useStateValue();
    const [category, setCategory] = useState("");

    useEffect(() => {
        db.collection('rooms').onSnapshot(snapshot => ( 
            // onsnapshot: Go ahead and take a snapshot of current database  whenever the database is changed (delete, add, update),
            // we get a new snapshot, keeps firing off this is why this is real time
            // so we go through the snapshots whihc are the documents inside of the collection "rooms" 
            setChannels(
                snapshot.docs.map(doc => ({ // go through each documents which are channels and map through it
                    id: doc.id,             // I want an object back from each doc which is channel so id is for channel id 
                    name: doc.data().name   // data() is giving all the data of this doc first and choose name for channel name
                }))
                )
        ))
    },[])

    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <div className="sidebar__info">
                    <h2>J.Han Programmer</h2>
                    <h3>
                        <FiberManualRecordIcon />
                        {user?.displayName}
                    </h3>
                </div>
                <CreateIcon />
            </div>
            {/* <SidebarOption Icon={InsertCommentIcon} title ="Threads" />
            <SidebarOption Icon={InboxIcon} title="Mentions & Reactions" />
            <SidebarOption Icon={DraftsIcon} title="Saved Items" />
            <SidebarOption Icon={BookmarkBorderIcon} title="Channel browser" />
            <SidebarOption Icon={PeopleAltIcon} title="People & user groups" />
            <SidebarOption Icon={AppsIcon} title="Apps" />
            <SidebarOption Icon={FileCopyIcon} title="File browser" />
            <SidebarOption Icon={ExpandLessIcon} title="Show less" />
            <hr />
            <SidebarOption Icon={ExpandMoreIcon} title="Channels" /> */}
            <hr />
            <SidebarOption Icon={AddIcon} title="Add Channel" addChannelOption /> {/* need some hlep for this prop */}

            {/* Connect to DB and list all the channels*/}
            {/* <SidebarOption ... /> */}
            <FormControl >
            <Select value="Hi">
            <MenuItem value="" disabled>
                Placeholder
            </MenuItem>
            {
                channels.map(channel => 
                    <SidebarOption title={channel.name} id={channel.id} value={channel.id} />
                )
            }
            </Select>
            <FormHelperText>Placeholder</FormHelperText>
            </FormControl>
        </div>
    )
}

export default Sidebar
