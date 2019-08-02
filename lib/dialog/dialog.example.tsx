import React, {useState} from 'react'
import Dialog from "./dialog";

export default function () {
    const [x, setX] = useState(false);
    const [y, setY] = useState(false);
    return (
        <div>
            <div>
                <h1>example 1 </h1>
                <button onClick={() => setX(!x)}>click</button>
                <Dialog visible={x} buttons={
                    [
                        <button onClick={() => {
                            setX(false)
                        }}>1</button>,
                        <button onClick={() => {
                            setX(false)
                        }}>2</button>
                    ]
                } onClose={() => {
                    setX(false)
                }}>
                    <div>hi</div>
                </Dialog>
            </div>
            <div>
                <h1>example 2 </h1>
                <button onClick={() => setY(!y)}>click</button>
                <Dialog visible={y} buttons={
                    [
                        <button onClick={() => {
                            setY(false)
                        }}>1</button>,
                        <button onClick={() => {
                            setY(false)
                        }}>2</button>
                    ]
                } onClose={() => {
                    setY(false)
                }} closeOnclickMask={true}>
                    <div>hi</div>
                </Dialog>
            </div>
        </div>

    )
}



