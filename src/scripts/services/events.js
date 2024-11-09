import { baseUrl } from "../variables.js"

async function getEvents(userName) {
    const response = await fetch(`${baseUrl}/${userName}/events`);
    const events = await response.json();

    const filteredEvents = events.filter(event => event.type === 'PushEvent' || event.type === 'CreateEvent');

    return filteredEvents.slice(0, 10);
}

export { getEvents };