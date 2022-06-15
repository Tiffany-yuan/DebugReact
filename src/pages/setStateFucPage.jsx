import { useState } from "react";

let temp;
export default function SetStateFucPage() {
  console.log("123", temp);

  const [list, setList] = useState([{
    id: '1',
    trades: [{
      tradeId: '1-1',
      name: 'tradeName',
      orders: [{
        orderId: '1-1-1',
        name: 'orderName'
      },{
        orderId: '1-1-2',
        name: 'orderName'
      }]
    }, {
      tradeId: '1-2',
      name: 'tradeName',
      orders: [{
        orderId: '1-2-1',
        name: 'orderName'
      },{
        orderId: '1-2-2',
        name: 'orderName'
      }]
    }]
  }, {
    id: '2',
    trades: [{
      tradeId: '2-1',
      name: 'tradeName',
      orders: [{
          orderId: '2-1-1',
          name: 'orderName'
      },{
        orderId: '2-1-2',
        name: 'orderName'
      }]
    }, {
      tradeId: '2-2',
      name: 'tradeName',
      orders: [{
          orderId: '2-2-1',
          name: 'orderName'
      },{
        orderId: '2-2-2',
        name: 'orderName'
      }]
    }]
  }]);
  const handleClick = () => {
    list.forEach(item => {
      item.trades.forEach(trade => {
        trade.orders.forEach(order => {
          order.name = 'new orderName';
        })
      })
    })
    debugger;
    setList(list);
  };
  return (
    <div className="App">
      <h1 onClick={handleClick}>lalala</h1>
      <ul>
        {
          list.map(item => (
            item.trades.map(trade => (
              trade.orders.map(order => (
                // <li key={order.orderId}>{order.name}</li>
                <Li key={order.orderId} order={order}></Li>
              ))
            ))
          ))
        }
      </ul>
    </div>
  );
}
function Li(props) {
  return <li key={props.order.orderId}>{props.order.name}</li>
}
