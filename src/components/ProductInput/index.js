import React, { useState } from 'react'
import { Form, Select, Input } from 'antd';

const { Option } = Select;
const { TextArea } = Input;

function ProductInput() {




    const [product, setProduct] = useState('');
    const [amount, setAmount] = useState('');
    const [coupon, setCoupon] = useState('');
    const [price, setPrice] = useState('');
  
    const handleProductChange = (value) => {
      setProduct(value);
    };
  
    const handleAmountChange = (e) => {
      setAmount(e.target.value);
    };
  
    const handleCouponChange = (e) => {
      setCoupon(e.target.value);
    };
  
    const handlePriceChange = (e) => {
      setPrice(e.target.value);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Handle form submission here
    };
  return (
    <Form >

        <div className='w-[350px] '>
      <Form.Item label={`Product`}
        style={{width:350}}
    
      >
        <Select value={product} onChange={handleProductChange} 
        size='large'
        >
          <Option value="product1">Product 1</Option>
          <Option value="product2">Product 2</Option>
          <Option value="product3">Product 3</Option>
        </Select>
      </Form.Item>
        </div>
      <Form.Item label="Amount">
        <Input
        style={{height:50, width:350}}
        type="number" placeholder='Enter Amount' value={amount} onChange={handleAmountChange} />
      </Form.Item>
      <Form.Item label="Coupon">
        <TextArea rows={4} placeholder='Please Enter Coupon'
                style={{height:50, width:350}}
        value={coupon} onChange={handleCouponChange} />
      </Form.Item>
      <Form.Item label="Price">
        <Input type="number"
                style={{height:50, width:350}}
        placeholder='Price' value={price} onChange={handlePriceChange} />
      </Form.Item>

      <div className=' w-[350px] h-10 justify-center flex '>
        <div className=' w-32 rounded-lg flex  justify-center h-full bg-blue-400'>
      <Form.Item>
        <button type="submit"
        
        >Submit</button>
      </Form.Item>
        </div>
      </div>
    </Form>
  )
}

export default ProductInput
