import { Text,View } from "react-native";
import { Link} from "expo-router";
const Index = () => {
  return <View 
  style ={{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  }}>
    <Text>Hello World</Text>
    <Link href={"/about"} rel="stylesheet">Go to About</Link> 
  </View>;
};

export default Index; 