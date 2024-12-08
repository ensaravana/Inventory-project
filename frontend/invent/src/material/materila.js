import { useRef ,React} from 'react';
import { useState ,useEffect} from 'react';
import DataTable from 'react-data-table-component';
import  Api  from './../api';
import { Flex,TextField } from "@radix-ui/themes";



function Materials() {
  const[name,setName] = useState('');
  const[qunatity,setQunatity] = useState('');
  const[quality,setQuality] = useState('');
  const[price,setPrice] = useState('');
  const[expdate,setExpdate] = useState('');
  const[proddata,setProddata] = useState([]);
  const[datas,setDatas] = useState(false);
  const[responsedata,setResponsedata] = useState([]) 
  const inputid = useRef();
  const inputElement = useRef();
  const inputElement1 = useRef();
  const inputElement2 = useRef();
  const inputElement3 = useRef();
  const inputElement4 = useRef();

  const columns = [
    { name: 'Name', selector: row => row.name, sortable: true },
    { name: 'quantity', selector: row => row.quantity, sortable: true },
    { name: 'quality', selector: row => row.quality, sortable: true },
    { name: 'price', selector: row => row.price, sortable: true },
    { name: 'expdata', selector: row => row.expdata, sortable: true },
    { name:'Update',selector: row =><button onClick={()=>{handleRowClicked(row);setDatas(true);}} >Update</button>},
    { name:'Delete',selector: row =><button onClick={()=>{handleDeleteTask(row)}} >Delete</button>}

    // Add more columns as needed
  ];

  const handleRowClicked = row => {
    inputid.current = row.id
    proddata.map((e)=>{if(e.id === row.id){
      inputElement.current.value = row.name
      inputElement1.current.value = row.qunatity
      inputElement2.current.value = row.quality
      inputElement3.current.value = row.price
      inputElement4.current.value = row.expdata
    }})


  };
  const handleDeleteTask = row => {
    setProddata(proddata.filter((t) => t.id !== row.id));
    Api.delete(`materialdetail/${row.id}`)
  .then(response => {
    console.log(response.data,"response.data");
  })
  .catch(error => {
    if (error.response) {
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      console.log(error.request);
    } else {
      console.log('Error', error.message);
    }
    console.log(error.config);
  });
  Fetechdata();

  }
  const data = proddata;

  useEffect(() => {
    Fetechdata();

  },[responsedata]);

  const Fetechdata = async() =>{
    try{
      const res = await Api.get('material/')
      setProddata(res.data)
      
    }
    catch(error){
      console.log(error,"error")
    }
  } 
  console.log(proddata)
  const handleSubmit = (e) =>{
    e.preventDefault();
    const payload = {
      name:name,
      quantity:qunatity,
      quality:quality,
      price:price,
      expdata:expdate
    }
    if(datas){
      Api.put(`materialdetail/${inputid.current}`, payload)
  .then(response => {
    console.log(response.data)
  })
  .catch(error => {
    console.log(error)
    });
    }
    else{

      Api.post("material/",payload)
      .then((response) => {
        setResponsedata(response)
        
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response);
          console.log("server responded");
        } else if (error.request) {
          console.log("network error");
        } else {
          console.log(error);
        }
      });
      

    }

    
      }
  
  return (
    <>
<form onSubmit={handleSubmit}>

<Flex direction="row" gap="3" maxWidth="500px">
	<TextField.Root
		color="indigo"
		variant="soft"
    placeholder="name"
    type='text' name ="name"   ref={inputElement} onChange={(e)=>setName(e.target.value)}
	/>
	<TextField.Root color="indigo" variant="soft" placeholder="qunatity" type='text' name ="qunatity" ref={inputElement1} onChange={(e)=>setQunatity(e.target.value)} />
	
</Flex>
<Flex direction="row" gap="3" maxWidth="500px">
	<TextField.Root
		color="indigo"
		variant="soft"
    placeholder="quality"
    type='text' name ="quality"   ref={inputElement2} onChange={(e)=>setQuality(e.target.value)}
	/>
	<TextField.Root color="indigo" variant="soft" placeholder="price"type='text' name ="price" ref={inputElement3} onChange={(e)=>setPrice(e.target.value)} />
	
</Flex>
<Flex direction="row" gap="3" maxWidth="500px">
<TextField.Root color="indigo" Width="250px" variant="soft" placeholder="expdate"type='text' name ="expdate" ref={inputElement4} onChange={(e)=>setExpdate(e.target.value)} />

</Flex>

    <input type="submit" />
   </form>
    <DataTable
  title="Employee List"
  columns={columns}
  data={data}
  onRowClicked={handleRowClicked}
  pagination
/>
    </>
   
  );
}

export default Materials;
