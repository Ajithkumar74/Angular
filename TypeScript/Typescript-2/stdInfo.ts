function stdInfo(stdName:String,...scores:number []):void{

    const totalMarks=scores.reduce((total,mark)=>total+mark,0);

    const averageMarks=scores.length?totalMarks/scores.length:0;
    console.log(`Student Name: ${stdName}, Total Marks: ${totalMarks}, Average Marks: ${averageMarks.toFixed(2)}`);

}

stdInfo('John Doe',85,90,89,78,89);
stdInfo('Jane smith',78,90,67);
stdInfo('Alice Johnson');