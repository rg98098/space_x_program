import React from 'react';
import Product from './Product/product';
import Auxiliary from '../../../hoc/Auxiliary/Auxiliary';

const products = props =>{
    const products = props.records.map(record =>{
        return <Product key={record.flight_number}
        imgUrl={record.img_url}
        landSuccess = {record.land_success!==null ? record.land_success.toString():""}
        launchSuccess = {record.launch_success !==null ? record.launch_success.toString():""}
        launchYear = {record.launch_year}
        missionName = {record.mission_name}
        missionIds = {[...record.mission_id]}
        flightNumber = {record.flight_number}
        />
    });
    return (
        <Auxiliary>
            {products}
        </Auxiliary>
    )
}

export default products;