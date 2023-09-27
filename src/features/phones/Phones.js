import List from "../../components/List";
import usePhone from "./usePhone";

const Phones = () => {
  const [data, error] = usePhone();
  return (
      error === null ?
          <List data={data} component={({name, surname}) => <ul>{`name: ${name}, surname: ${surname}`}</ul>}/> :
          <p>{error}</p>
  )
}

export default Phones