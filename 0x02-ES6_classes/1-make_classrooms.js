import ClassRoom from './0-classroom';  // Adjust the path as necessary

export function initializeRooms() {
    return [
        new ClassRoom(19),
        new ClassRoom(20),
        new ClassRoom(34)
    ];
}
