// square diagram in for loop and if conditon


for(i=1;i<=8;i++){
    a=""
    for(j=1;j<=3;j++){
        if(i%2==0){
            a=a+" * "
            a=a+" $ "
        }
    }
    console.log(a)
}
