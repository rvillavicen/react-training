import React from 'react'
import { FaInbox, FaPaperPlane, FaTrashAlt, FaUserSecret} from "react-icons/fa"
import { MdDrafts } from "react-icons/md";

const folders = [
  {
    "label": "Inbox",
    "icon": <FaInbox />
  },
  {
    "label": "Sent",
    "icon": <FaPaperPlane />
  },
  {
    "label": "Draft",
    "icon": <MdDrafts />
  },
  {
    "label": "Spam",
    "icon": <FaUserSecret />
  },
  {
    "label": "Trash",
    "icon": <FaTrashAlt />
  }
]

export default folders