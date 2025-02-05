import React from "react";
import { useParams } from "react-router";
import CTFData from "../../../Other/CyberGames/CTF/CTFData";
import { encodeURL } from "../../../Blogs/util";
// import EventsData from "../EventsData/EventsData";
import {
    EventComponent,
    EventContent,
    EventDate,
    EventHeaderImage,
    EventHeaderImageContainer,
    EventTitle,
    // EventVenue,
} from "../EventsElement";

const Event = () => {
    const { title } = useParams();
    const event = [...CTFData].find((event) => encodeURL(event?.title) === title);

    return (
        <EventComponent>
            <EventHeaderImageContainer>
                <EventHeaderImage src={event?.image} alt={event?.title} />
                {/* <EventVenue>{event?.venue}</EventVenue> */}
            </EventHeaderImageContainer>
            <EventTitle>{event?.title}</EventTitle>
            <EventDate>{event?.date}</EventDate>
            <EventContent>{event?.content}</EventContent>
        </EventComponent>
    );
};

export default Event;
