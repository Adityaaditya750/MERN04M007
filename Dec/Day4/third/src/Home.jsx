import React from 'react'

function Home(props) {
  return (
    <div>Home
        <br />
        a value is {props.a}
        <br />
        string value is {props.str}
        <br />
        boolean value is: {props.isTrue.toString()}
        <br />
        array values are: {props.arr.join(" ")}
        <br />
        <ul>
            {props.arr.map((v,i)=>(
                <li key={i}>{v}</li>
            ))}
        </ul>
        <br />
        object value
        Name: {props.obj.name}
        <br />
        Age: {props.obj.age}
        <br />
        phone: {props.obj.phone}
        {props.func()}
    </div>
  )
}

export default Home