import PhoneCallbackTwoToneIcon from "@mui/icons-material/PhoneCallbackTwoTone";
import PermPhoneMsgTwoToneIcon from "@mui/icons-material/PermPhoneMsgTwoTone";
import MarkEmailUnreadTwoToneIcon from "@mui/icons-material/MarkEmailUnreadTwoTone";
import PhoneMissedTwoToneIcon from "@mui/icons-material/PhoneMissedTwoTone";
import React from "react";

function CallIconGenerator({ callType }) {
	switch (callType) {
		case "missed":
			return <PhoneMissedTwoToneIcon />;
		case "answered":
			return <PermPhoneMsgTwoToneIcon />;
		case "voicemail":
			return <MarkEmailUnreadTwoToneIcon />;
		default:
			return <PhoneCallbackTwoToneIcon />;
	}
}

export default CallIconGenerator;
