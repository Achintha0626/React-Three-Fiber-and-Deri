export function Box(props) {
  console.log(props);
  
  return (
    <mesh {...props} >  //these three dot helps to pass props without mentioniting each of them one by one
      <boxGeometry />
      <meshBasicMaterial color={0x00ff00} wireframe />
    </mesh>
  );
}
