    function prodBill1(custname:string,...products: number[]):void{
        const totalprice=products.reduce((total,price)=>total+price,0);

        console.log(`Customer name: ${custname}, Total Price: $${totalprice.toFixed(2)}`);
    }

    prodBill('John doe',19.99,29.99,49.99);
    prodBill('John smith',5.99,15.49,3.75);
