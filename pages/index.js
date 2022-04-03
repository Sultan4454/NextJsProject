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
    
    // website : Yup.string()
    //       .matches(
    //         // /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/
    //         /^((https?|ftp):\/\/)?(www.)?(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i
    //       )
    //       .required('The field is required')
    // if(event.target.value == ''){
    //   setddisabled(true);
    // }
  }

  const textarray = ['Always Start with https://','The world is too big and so the numbers of websites are', 'The accuaracy can effected if the based on the latest technology', 'The accuracy for algorithm is 70 - 30 percent so do not over trust']

  // const textanim = function (){
  //   for (let i = 0; i < textarray.length; i++) {
  //     function (index){
  //       let k = 1;
  //     setTimeout(function(){
  //       setmessages(textarray[i]);
  //       console.log(textarray[i]);
  //     },1000 * (k));
  //     }
  //   }
  // }

  // useEffect(() =>{
  //   for(var i = 0; i < textarray.length; i++){
  //     (function(i)
  //     {
  //         setTimeout(function(){
  //           console.log(textarray[i]);
  //           setmessages(textarray[i]);
  //         }, 3000);
  //     })(i);
  // }
  // })

  // useEffect(() =>{
  //   for(var i = 0;i < textarray.length; i++){
  //     let k = i;
  //     setTimeout(function(){
  //       setmessages(textarray[i]);
  //       console.log(textarray[i]);
  //     }, 3000 * (k + 1));
  // }
  // })

  return (
    <>
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
          <input type="submit" value="Submit" className='butn-primary' disabled = {ddisabled}/>
          </div>
          </div>
          <div className="dataabouturl">
          {Showerror ? Errordata : ''}
          <h5>{messages}</h5>
          {Urlrelateddata && (<h5>{Urlrelateddata.wp}</h5>)}
          {Urlrelateddata && (<h5>{Urlrelateddata.phishtank}</h5>)}
          {Urlrelateddata && (<h5>{Urlrelateddata.error}</h5>)}
          {Urlrelateddata && (<h5>Url : {Urlrelateddata.Url}</h5>)}
          {Urlrelateddata && (<h5>IP Address : {Urlrelateddata.Ipaddr}</h5>)}
          {Urlrelateddata && (<h5>SSl Certificate issued by : {Urlrelateddata.ssl_finalstate}</h5>)}
          {Urlrelateddata && (<h5>Favicon :  {Urlrelateddata.faviconico}</h5>)}
          {Urlrelateddata && (<h5>Length of Url (Characters) : {Urlrelateddata.Length}</h5>)}
          {Urlrelateddata && (<h5>Subdomain : {Urlrelateddata.having_subdomain}</h5>)}
          {Urlrelateddata && (<h5>The Domain Registration Length is (years): {Urlrelateddata.registration_length}</h5>)}
          {Urlrelateddata && (<h5>Port : {Urlrelateddata.port}</h5>)}
          {Urlrelateddata && (<h5>Website rank on Alexa top 10 Million Websites : {Urlrelateddata.traffic}</h5>)}
          {Urlrelateddata && (<h5>The Website is live for (months) : {Urlrelateddata.agedomain}</h5>)}
          {Urlrelateddata && (<h5>Phish : {Urlrelateddata.Phish}</h5>)}
          {Loading ? <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>: ''}
          </div>
        </div>
      </form>
    </>
  )
}