import React, { useState, useEffect } from 'react'
import Navi from './Nav';
import Button from 'react-bootstrap/Button';
import { Card, Container } from 'react-bootstrap';
import axios from 'axios';
import { HoverSlideshow } from "react-hover-slideshow";

export default function Home() {
  const [all, setAll] = useState({
    allProduct: [],
    flagAll: 0
  })
  const [top, setTop] = useState({
    arr: [],
    flag: 0
  })
  const [shirt, setShirt] = useState({
    shirtData: [],
    flagShirt: 0
  })
  const [jeans, setJeans] = useState({
    jeansData: [],
    jeanFlag: 0
  })
  const [dress, setDress] = useState({
    dressData: [],
    dressFlag: 0
  })
  const[filter,setFilter]=useState({
    filterData:[],
    filterFlag:0
  })
  useEffect(() => {
    axios.get("http://localhost:3002/category").then((res) => {
      const result = res.data;
      setAll({ allProduct: result, flagAll: 0 })
      const products = result.filter(result => result.cat == 'top')
      setTop({ arr: products })
      const shirts = result.filter(result => result.cat == 'shirt')
      setShirt({ shirtData: shirts })
      const jean = result.filter(result => result.cat == 'jeans')
      setJeans({ jeansData: jean })
      const dresses = result.filter(result => result.cat == 'dress')
      setDress({ dressData: dresses })
    })

  }, [])

const style={
  display:"inline-block",
  border:"2px solid grey",
  boxShadow:"2px 2px 3px grey",
}
  const products=()=>{
    const pro=all.allProduct;
    const val=document.getElementById('search').value
    const result=pro.filter(pro=>pro.productName.toLowerCase().startsWith(val));
    console.log(result)
    setFilter({
      filterData:result,
      filterFlag:1
    })
    setTop({
      ...top, flag: 0
    })
    setDress({
      ...dress, dressFlag: 0
    })
    setJeans({
      ...jeans, jeanFlag: 0
    })
    setShirt({
      ...shirt, flagShirt: 0
    })
    setAll({
      ...all, flagAll: 1
    })
  }
  const allTops = () => {
    setTop({
      ...top, flag: 1
    })
    setDress({
      ...dress, dressFlag: 0
    })
    setJeans({
      ...jeans, jeanFlag: 0
    })
    setShirt({
      ...shirt, flagShirt: 0
    })
    setAll({
      ...all, flagAll: 1
    })
    setFilter({
      filterFlag:0
    })
  }
  const allPro = () => {
    setAll({
      ...all, flagAll: 0
    })
  }
  const allShirt = () => {
    setShirt({
      ...shirt, flagShirt: 1
    })
    setTop({
      ...top, flag: 0
    })
    setAll({
      ...all, flagAll: 1
    })
    setDress({
      ...dress, dressFlag: 0
    })
    setJeans({
      ...jeans, jeanFlag: 0
    })
    setFilter({
      filterFlag:0
    })
  }
  const allJeans = () => {
    setJeans({
      ...jeans, jeanFlag: 1
    })
    setShirt({
      ...shirt, flagShirt: 0
    })
    setDress({
      ...dress, dressFlag: 0
    })
    setTop({
      ...top, flag: 0
    })
    setAll({
      ...all, flagAll: 1
    })
    setFilter({
      filterFlag:0
    })
  }
  const allDress = () => {
    setJeans({
      ...jeans, jeanFlag: 0
    })
    setDress({
      ...dress, dressFlag: 1
    })
    setAll({
      ...all, flagAll: 1
    })
    setTop({
      ...top, flag: 0
    })
    setShirt({
      ...shirt, flagShirt: 0
    })
    setFilter({
      filterFlag:0
    })
  }
  return (
    <>
      <Navi />
      <h1 className="text-center">Welcome to Amruta's Shop!</h1>
      <>
        <Container className="my-3"style={{textAlign:"center"}}>
          <Button className="mx-3 px-3 bg-primary text-dark fw-bold"onClick={allPro} variant="outline-primary">All</Button>{' '}
          <Button className="mx-3 px-3 bg-secondary text-dark fw-bold"onClick={allTops} variant="outline-secondary">Tops</Button>{' '}
          <Button className="mx-3 px-3 bg-success text-dark fw-bold"onClick={allShirt} variant="outline-success">Shirts</Button>{' '}
          <Button className="mx-3 px-3 bg-warning text-dark fw-bold"onClick={allJeans} variant="outline-warning">Jeans</Button>{' '}
          <Button className="mx-3 px-3 bg-danger text-dark fw-bold"onClick={allDress} variant="outline-danger">Dress</Button>{' '}
        </Container>
      </>
      <form class="d-flex">
        <input class="form-control me-2 mx-3" type="search" id="search"onChange={products} aria-label="Search" placeholder="search a product by typing its name..." style={{border:"2px solid green"}}/>
      </form>
      
      
      {all.flagAll==0 &&
      all.allProduct.map(pro=>
        <Card  className="mx-3 my-3 border-rounded" style={style}>
        <HoverSlideshow
          aria-label="My pretty picture slideshow"
          images= { [
           pro.images1,
           pro.images2,
            pro.images3
        ]}
          width="400px"
          height="400px"
      />
        <Card.Text className="text-center text-danger fw-bold">{pro.productName}</Card.Text>
        <Card.Text className="text-center text-success fw-bold"> Rs.{pro.price}</Card.Text>
      </Card>
      )}
  
        {top.flag==1&&
             top.arr.map(pro =>
              <Card  className="mx-3 my-3 border-rounded" style={style}>
              <HoverSlideshow
                aria-label="My pretty picture slideshow"
                images= { [
                 pro.images1,
                 pro.images2,
                  pro.images3
              ]}
                width="400px"
                height="400px"
            />
              <Card.Text className="text-center text-danger">{pro.productName}</Card.Text>
              <Card.Text className="text-center text-danger"> Rs.{pro.price}</Card.Text>
            </Card>
            )}  
       
             {shirt.flagShirt==1&&
             shirt.shirtData.map(pro =>
              <Card  className="mx-3 my-3 border-rounded" style={style}>
              <HoverSlideshow
                aria-label="My pretty picture slideshow"
                images= { [
                 pro.images1,
                 pro.images2,
                  pro.images3
              ]}
                width="400px"
                height="400px"
            />
              <Card.Text className="text-center text-danger">{pro.productName}</Card.Text>
              <Card.Text className="text-center text-danger"> Rs.{pro.price}</Card.Text>
            </Card>
            )}  
       
             {filter.filterFlag==1&&
             filter.filterData.map(pro =>
              <Card  className="mx-3 my-3 border-rounded" style={style}>
              <HoverSlideshow
                aria-label="My pretty picture slideshow"
                images= { [
                 pro.images1,
                 pro.images2,
                  pro.images3
              ]}
                width="400px"
                height="400px"
            />
              <Card.Text className="text-center text-danger">{pro.productName}</Card.Text>
              <Card.Text className="text-center text-danger"> Rs.{pro.price}</Card.Text>
            </Card>
            )}  
        {
         filter.filterFlag==1&& filter.filterData.length==0 && <h1>No Product Found</h1>
       } 
             {jeans.jeanFlag==1&&
             jeans.jeansData.map(pro =>
              <Card  className="mx-3 my-3 border-rounded" style={style}>
              <HoverSlideshow
                aria-label="My pretty picture slideshow"
                images= { [
                 pro.images1,
                 pro.images2,
                  pro.images3
              ]}
                width="400px"
                height="400px"
            />
              <Card.Text className="text-center text-danger">{pro.productName}</Card.Text>
              <Card.Text className="text-center text-danger"> Rs.{pro.price}</Card.Text>
            </Card>
            )}  
       
             {dress.dressFlag==1&&
             dress.dressData.map(pro =>
              <Card  className="mx-3 my-3 border-rounded" style={style}>
              <HoverSlideshow
                aria-label="My pretty picture slideshow"
                images= { [
                 pro.images1,
                 pro.images2,
                  pro.images3
              ]}
                width="400px"
                height="400px"
            />
              <Card.Text className="text-center text-danger">{pro.productName}</Card.Text>
              <Card.Text className="text-center text-danger"> Rs.{pro.price}</Card.Text>
            </Card>
            )}    
        
    </>
  )
}
