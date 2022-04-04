import Head from 'next/head'
import { useState , useEffect ,React} from 'react'
import axios from 'axios'
import * as Yup from 'yup'

export default function Home() {

  const [Url, setUrl] = useState('');
  const [Urlrelateddata, setUrlrelateddata] = useState()
  const [Showerror, setShowerror] = useState(false)
  const [Errordata, setErrordata] = useState()
  const [Loading, setLoading] = useState()
  const [ddisabled, setddisabled] = useState(true)
  const [ShowsampleText, setShowsampleText] = useState(true)
  const [messages, setmessages] = useState('');
  const [messages2, setmessages2] = useState('');
  const pattern = /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/;

  const getUrldata = async (event) => {
    event.preventDefault();
    if (Url == ''){
      setddisabled(true);
      console.log('The field is empty');
    }

    // console.log(Url)
    setUrlrelateddata(null);
    setShowerror(false);
    setErrordata(null);
    setShowsampleText(false);
    setLoading(true)
      try{
        const response = await axios.get(`http://127.0.0.1:5000/url?webUrl=${Url}`)
        setLoading(false)
        console.log(response.data)
        setUrlrelateddata(response.data);
        console.log(Urlrelateddata);
      }
      catch(e) 
      {
        console.log(e);
        setShowsampleText(false);
        setLoading(false);
        if(navigator && navigator.onLine) {
          setErrordata('The Server is Down');
        }
        else{
          setErrordata('Check your Internet Connectivity and Try again');
        }
        setShowerror(true);
      }
  };

  const ochange = function (event) {
    setUrl(event.target.value);
    console.log(Url)
    if (Url.startsWith('http://') || Url.startsWith('https://'))
    {
      console.log('Its working')
      setddisabled(false);
    }
    else{
      setddisabled(true);
    }
  }

  const textarray = ['Always Start with https://','The world is too big and so the numbers of websites are', 'The accuaracy can effected if the based on the latest technology', 'The accuracy for algorithm is 70 - 30 percent so do not over trust']

  return (
    <>
    <div className="home-section">
      {
        Loading && (<div className="backdrop-loading">
        <div className="loading">
          <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
          </div>
          <span>Loading...</span>
        </div>
      </div>)
      }
      
    <Head>
        <title> UbiNext | Never Get Trapped</title>
      </Head>
      <form onSubmit={getUrldata} >
        <div className='homepage'>
          <div className="content">
          <h1 className='title'>Get the phish into the Net!</h1>
          <h6 className='sub-title'>Enter the Url to check if its Phishing</h6>
          <div className="inputContainer">
          <input type="text" className="SearchBox" value={Url} onChange={ochange} placeholder="Enter Url here" required/>
          <input type="submit" value="Submit" className={"butn-primary"} />
          </div>
          </div>
          <div className="dataabouturl">
          {Showerror ? (
            <h5>{Errordata}</h5>
          )  : ' '}
          {Urlrelateddata && (
            <div className="row">
            <div className="col-12">
              {Urlrelateddata?.Phish ? (<h2>This website is Safe</h2>):(<h2>This website is UnSafe</h2>)}
            </div>
            <div className="col-12">
            <h5>{Urlrelateddata?.wp}</h5>
            </div>
            <div className="col-12">
            <h5>{Urlrelateddata?.phishtank}</h5>
            </div>
            <div className="col-12">
            <h5>{Urlrelateddata?.error}</h5>
            </div>
            <div className="col-lg-4">
              <div className="read-only-field">
                <span>Url :</span>
                <h6>{Urlrelateddata?.Url}</h6>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="read-only-field">
                <span>IP Address :</span>
                <h6>{Urlrelateddata?.Ipaddr}</h6>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="read-only-field">
                <span>SSl Certificate issued by :</span>
                <h6>{Urlrelateddata?.ssl_finalstate}</h6>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="read-only-field">
                <span>Favicon :</span>
                <h6>{Urlrelateddata?.faviconico}</h6>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="read-only-field">
                <span>Length of Url (Characters) :</span>
                <h6>{Urlrelateddata?.Length}</h6>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="read-only-field">
                <span>Subdomain :</span>
                <h6>{Urlrelateddata?.having_subdomain}</h6>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="read-only-field">
                <span>The Domain Registration Length is (years) :</span>
                <h6>{Urlrelateddata?.registration_length}</h6>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="read-only-field">
                <span>Port :</span>
                <h6>{Urlrelateddata?.port}</h6>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="read-only-field">
                <span>The Website is live for (months) :</span>
                <h6>{Urlrelateddata?.agedomain}</h6>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="read-only-field">
                <span>Website rank on Alexa :</span>
                <h6>{Urlrelateddata?.traffic}</h6>
              </div>
            </div>
          </div>
          )}
          </div>
        </div>
      </form>
    </div>
    </>
  )
}