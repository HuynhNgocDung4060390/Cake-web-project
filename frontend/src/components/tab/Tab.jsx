import React, { useState } from 'react'
// import Password from '../password/Password'
// import Textfield from '../textfield/Textfield'
import Button from '../button/Button';
import styles from './Tab.module.css';

const Tab = () => {
    const [activeTab, setActiveTab] = useState('customerInfo');

    const user = {
      name: 'Đào Huyền Anh',
      id: '01234455657',
      avatar: '/src/assets/image/avatar.png', // Replace with user avatar URL
    };

    // This is just placeholder data. Replace this with your actual data.
    const orders = [
      {
        image: 'path/to/image.jpg',
        name: 'No sugar cake',
        price: '45.000đ',
        date: 'July 30 at 10:00 AM',
        orderNumber: 'T23456789ABCXYZ123'
      },
      // Add more orders here...
    ];
  
    return (
      <div className={styles.tab__container}>
        <div className={styles.container__wrapper}>
          <div className={styles.user__container}>
            <img src={user.avatar} alt="User Avatar" className={styles.avatar} />
            <div className={styles.user__info}>
              <p className='title--1' style={{ color: 'var(--primary-color)' }}>{user.name}</p>
              <p className='title--3'>ID: {user.id}</p>
            </div>
            <div className={styles.signout}>
              <Button type='btn1 primary'>Đăng xuất</Button>
            </div>
          </div>
          <div className={styles.tab__header}>
            <div 
              className={`${styles.tab} ${activeTab=== 'customerInfo' ? styles.active : ''} title--3`} 
              onClick={() => setActiveTab('customerInfo')}
            >
              Thông tin khách hàng
            </div>
            <div 
              className={`${styles.his__box} ${styles.tab} ${activeTab === 'orderHistory' ? styles.active : ''} title--3`} 
              onClick={() => setActiveTab('orderHistory')}
            >
              Lịch sử đặt hàng
            </div>
            <div 
              className={`${styles.tab} ${activeTab === 'myOrders' ? styles.active : ''} title--3`} 
              onClick={() => setActiveTab('myOrders')}
            >
              Đơn hàng của tôi
            </div>
          </div>
        </div>
  
        <div className={styles.tab__content}>
          {activeTab === 'customerInfo' && (
            <div className={styles.customerInfo}>
              <div className={`${styles.title} heading`}>Thông tin khách hàng</div>
              <fieldset>
                <legend className={`${styles.subtitle} title--3`}>Tài khoản và bảo mật</legend>
                <form action="">
                  <label htmlFor="email" className='title--4'>Email</label> <br />
                  <input type="text" id='email' /><br />
                  {/* <div className={styles.form__button}>
                    <Button type = 'btn1 secondary--1'>Cập nhật</Button>
                  </div> */}
                </form>
              </fieldset>
              
            </div>
          )}
          {activeTab === 'orderHistory' && (
            <div className={styles.orderHistory}>
              {orders.map((order, index) => (
                <div key={index} className={styles.order}>
                  <img src={order.image} alt={order.name} />
                  <p>{order.name}</p>
                  <p>{order.price}</p>
                  <p>Order time: {order.date}</p>
                  <p>Order Number: {order.orderNumber}</p>
                  <button>Reorder</button>
                  <button>View Details</button>
                </div>
              ))}
            </div>
          )}
          {activeTab === 'myOrders' && <p>My Orders Content</p>}
        </div>
      </div>
    );
}

export default Tab