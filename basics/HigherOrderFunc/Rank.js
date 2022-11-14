var Employee={
    empid:"",
    name:"",
    salary:"",
}
let arr=[
    {empid:1,name:"Abcs",salary:1443000000},
    {empid:2,name:"Def",salary:20000},
    {empid:3,name:"Ghi",salary:325600000},
    {empid:4,name:"Jkl",salary:46600000},
    {empid:5,name:"Mno",salary:500000},
]
let a=arr.filter(emp=> emp.salary>10000000)
a=a.map(emp => emp.name).join(', ')
console.log(a);