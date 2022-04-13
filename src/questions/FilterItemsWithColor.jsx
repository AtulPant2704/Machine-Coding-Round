// Take the array as above. Get the names of all the male characters whose height is greater than 180. Then render these names on the viewport. The names should be shown in the colour of their eye, as shown below.

const FilterItemsWithColor = () => {
    const characters = [
        {
            name: 'Luke Skywalker',
            height: 172,
            eye_color: 'blue',
            gender: 'male',
        },
        {
            name: 'Darth Vader',
            height: 202,
            eye_color: 'orange',
            gender: 'male',
        },
        {
            name: 'Leia Organa',
            height: 150,
            eye_color: 'brown',
            gender: 'female',
        },
        {
            name: 'Anakin Skywalker',
            height: 188,
            eye_color: 'blue',
            gender: 'male',
        },
    ];

    return (
        <div>
            {characters.filter(item => item.gender === "male").filter(item => item.height > 180).map(item => (
                <li key={item} style={{ color: `${item.eye_color}` }}> {item.name}</li>
            ))}
        </div >
    )
}

export { FilterItemsWithColor };
