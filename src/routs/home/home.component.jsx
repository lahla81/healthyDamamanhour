import React from "react";

import MenuItem from '../../components/menu-item/menu-item.component';

const Home = () =>{
    const categories = [
        {
            id: 1,
            title: 'milks',
            arTitle: 'الحليب',
            imageUrl: 'https://firebasestorage.googleapis.com/v0/b/healthydam-db.appspot.com/o/milks%2F001.jpg?alt=media&token=d8b5c53b-8e0d-4d44-bf81-4f8084b2f37d',
          },
          {
            id: 2,
            title: 'rayeb',
            arTitle: 'الرايب',
            imageUrl: 'https://firebasestorage.googleapis.com/v0/b/healthydam-db.appspot.com/o/rayeb%2Frayeb-850.jpg?alt=media&token=c67b1d40-1161-4e7a-aa0c-51420057d992',
          },
          {
            id: 3,
            title: 'yogurt',
            arTitle: 'الزبادي',
            imageUrl: 'https://firebasestorage.googleapis.com/v0/b/healthydam-db.appspot.com/o/yogurt%2Fyogurt-105.jpg?alt=media&token=d3c04ed4-48fc-4c56-9af1-da67a7546e88',
          },
          {
            id: 4,
            title: 'cheese',
            arTitle: 'الجبن',
            imageUrl: 'https://firebasestorage.googleapis.com/v0/b/healthydam-db.appspot.com/o/cheese%2Fsheder-550.jpg?alt=media&token=61521a22-49d3-4cec-a265-09b0ef337414',
          },
          {
            id: 5,
            title: 'icecream',
            arTitle: 'ايس كريم',
            imageUrl: 'https://firebasestorage.googleapis.com/v0/b/healthydam-db.appspot.com/o/icecream%2Fs3.png?alt=media&token=fd95b931-97c1-4f30-9ac6-c8745fc9d48a',
          },
          {
            id: 6,
            title: 'honey',
            arTitle: 'العسل',
            imageUrl: 'https://firebasestorage.googleapis.com/v0/b/healthydam-db.appspot.com/o/honey%2FNawar%20950.png?alt=media&token=1b2da516-3b2a-4775-a6c2-64350784955a',
          },
          {
            id: 7,
            title: 'keto',
            arTitle: 'كيتو',
            imageUrl: 'https://firebasestorage.googleapis.com/v0/b/healthydam-db.appspot.com/o/keto%2Fpound%20cake.jpg?alt=media&token=31c84466-040a-45ed-91d5-891b998366f6',
          },{
            id: 8,
            title: 'oats',
            arTitle: 'الشوفان',
            imageUrl: 'https://firebasestorage.googleapis.com/v0/b/healthydam-db.appspot.com/o/oats%2Fdeio1v2_oats_625x300_24_May_19.jpg?alt=media&token=2506c4f6-d8c3-422a-83c5-055ea0e1d827',
          }
    ]       
        return(
            <div className="row mt-5">
                {
                    categories.map(({title,arTitle, id, imageUrl, size}) => (
                        <MenuItem key={id} arTitle={arTitle} title={title} imageUrl={imageUrl} size={size}/>
                    ))
                }
            </div>
        )
}

export default Home;