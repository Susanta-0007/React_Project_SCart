import React from "react";

class CartIteam extends React.Component {
  render() {
    return (
      <div className="cart-iteam">
        <div className="left-block">
          <img />
        </div>
        <div className="right-block">
            <div>Phone</div>
            <div>Rs. 999</div>
            <div>Qty :1</div>
            <div className="cart-iteam-actions">
                    {/*Button*/}
            </div>
        </div>
      </div>
    );
  }
}

export default CartIteam;