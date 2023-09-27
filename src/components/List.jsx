const List = ({data, component}) => (
    <li>
        {data.map((val)=> component(val))}
    </li>
)

export default List;