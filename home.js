function Home(){
  return (
    <Card
    bgcolor="info"
          txtcolor="black"
          header= "BelleK Bank"
          text="Welcome to your bank! At BelleK Bank, we personalize your account to fit your needs. It is banking made easy. Create an account today and start your journey to financial freedom with us."
          body={(<img src= "./bank2.jpg" className="img-fluid"  alt="Responsive image"/>)}
        />
  );  
}
