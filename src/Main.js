import React, { useState } from 'react'

export default function Main() {
  const [inputvalue, setinputvalue] = useState('')
  function display(value) {
    setinputvalue(inputvalue + value)
  }

  function calculate() {
    var answer = eval(inputvalue)
    setinputvalue(answer)
  }

  function clear() {
    setinputvalue('')
  }
  return (
    <div className='row justify-content-center '>
      <div className='col-md-5'>
        <h1> Calculator</h1>
        <div style={{ marginLeft: '28%' }}>
          <table>
            <tr
              style={{
                display: 'flex',
                flexDirection: 'row',
                marginLeft: '9%',
                marginTop: '5%',
              }}
            >
              <input
                type='text'
                value={inputvalue}
                style={{ width: '70%' }}
                onclick={clear}
              ></input>

              <button>C</button>
            </tr>
            <tr>
              <button
                onClick={() => {
                  display('1')
                }}
              >
                1
              </button>
              <button
                onClick={() => {
                  display('2')
                }}
              >
                2
              </button>
              <button
                onClick={() => {
                  display('3')
                }}
              >
                3
              </button>
              <button
                onClick={() => {
                  display('/')
                }}
              >
                /
              </button>
            </tr>
            <tr>
              <button
                onClick={() => {
                  display('4')
                }}
              >
                4
              </button>
              <button
                onClick={() => {
                  display('5')
                }}
              >
                5
              </button>
              <button
                onClick={() => {
                  display('6')
                }}
              >
                6
              </button>
              <button
                onClick={() => {
                  display('.')
                }}
              >
                .
              </button>
            </tr>
            <tr>
              <button
                onClick={() => {
                  display('7')
                }}
              >
                7
              </button>
              <button
                onClick={() => {
                  display('8')
                }}
              >
                8
              </button>
              <button
                onClick={() => {
                  display('9')
                }}
              >
                9
              </button>
              <button
                onClick={() => {
                  display('+')
                }}
              >
                +
              </button>
            </tr>

            <tr>
              <button
                onClick={() => {
                  display('.')
                }}
              >
                .
              </button>
              <button
                onClick={() => {
                  display('0')
                }}
              >
                0
              </button>
              <button
                onClick={() => {
                  calculate()
                }}
              >
                =
              </button>
              <button
                onClick={() => {
                  display('*')
                }}
              >
                *
              </button>
            </tr>
          </table>
        </div>
      </div>
    </div>
  )
}
