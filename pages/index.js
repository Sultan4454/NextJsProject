import Head from 'next/head'
import { useState } from 'react'
import React from 'react'
import { useEffect } from 'react/cjs/react.development'
import axios from 'axios'

export default function Home() {

  const [Url, setUrl] = useState('');
  const [Urlrelateddata, setUrlrelateddata] = useState()
  const [Showerror, setShowerror] = useState(false)
  const [Errordata, setErrordata] = useState()
  const [Loading, setLoading] = useState()

  const getUrldata = async (event) => {
      event.preventDefault();
      console.log(Url)
      setUrlrelateddata(null);
      setShowerror(false);
      setErrordata(null);

        setLoading(true)
        const response = await axios.get(`http://127.0.0.1:5000/url?webUrl=${Url}`).then(res=>{
        setLoading(false)
        setUrlrelateddata(response.data)
        }).catch (res=>{
          setLoading(false);
          if(navigator && navigator.onLine) {
            setErrordata('The Server is Down');
          }
          else{
            setErrordata('Check your Internet Connectivity and Try again');
        }
        setShowerror(true);
        }) 
    };

  const newfun = function () {
    console.log("Its works")
  }

  const ochange = function (event) {

    setUrl(event.target.value);
    console.log("The value changed")

  }

  const handleSubmit = (event) => {
    event.preventDefault();
  }

  return (
    <>
      <Head>
        <title> UbiNext | Never Get Trapped</title>
      </Head>
      <form onSubmit={getUrldata}>
        <div className='homepage'>
          <div className="content">
          <h1 className='title'>Get the phish into the Net!</h1>
          <h6 className='sub-title'>Enter the Url to check if its Phishing</h6>
          <div className="inputContainer">
          <input type="text" className="SearchBox" value={Url} onChange={ochange} placeholder="Enter Url here" />
          <input type="submit" value="Submit" className='butn-primary'/>
          </div>
          </div>
          {/* <pre>{JSON.stringify(Urlrelateddata.)}</pre> */}
          <div className="dataabouturl">
          {Showerror ? Errordata : ' '}
          {Urlrelateddata && (<h5>Urlrelateddata.wp</h5>)}
          {Urlrelateddata && (<h5>Urlrelateddata.phishtank</h5>)}
          {Urlrelateddata && (<h5>Urlrelateddata.error</h5>)}
          {Urlrelateddata && (<h5>Urlrelateddata.dnsrec</h5>)}
          {Urlrelateddata && (<h5>Urlrelateddata.Length</h5>)}
          {Urlrelateddata && (<h5>Urlrelateddata.Stats</h5>)}
          {Urlrelateddata && (<h5>Urlrelateddata.registration_length</h5>)}
          {Urlrelateddata && (<h5>Urlrelateddata.emailsubmission</h5>)}
          {Urlrelateddata && (<h5>Urlrelateddata.traffic</h5>)}
          {Urlrelateddata && (<h5>Urlrelateddata.Redirection</h5>)}
          {Urlrelateddata && (<h5>Urlrelateddata.FinalResult</h5>)}
          {Urlrelateddata && (<h5>Urlrelateddata.Phish</h5>)}
          {Loading ? <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>: ''}
          </div>
        </div>
      </form>
    </>
  )
}