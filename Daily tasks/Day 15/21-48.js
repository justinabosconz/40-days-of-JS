const employees = [
  { id: 1, name: "Alice", departmentId: 1, salary: 5000 },
  { id: 2, name: "Bob", departmentId: 2, salary: 7000 },
  { id: 3, name: "Charlie", departmentId: 3, salary: 4500 },
  { id: 4, name: "Diana", departmentId: 1, salary: 5500 },
  { id: 5, name: "Edward", departmentId: 2, salary: 8000 },
  { id: 6, name: "Fiona", departmentId: 4, salary: 6000 },
  { id: 7, name: "George", departmentId: 3, salary: 5200 },
  { id: 8, name: "Helen", departmentId: 4, salary: 7200 },
  { id: 9, name: "Ian", departmentId: 2, salary: 4800 },
  { id: 10, name: "Jane", departmentId: 1, salary: 5100 },
];

const departments = [
  { id: 1, name: "HR" },
  { id: 2, name: "Engineering" },
  { id: 3, name: "Marketing" },
  { id: 4, name: "Sales" },
];

// T-021: Can you filter employees who work in the "Engineering" department?
let result = employees.filter((employee) => {
  return (
    employee.departmentId ===
    departments.find((dept) => {
      return dept.name === "Engineering";
    }).id
  );
});
console.log("T-021: ", result);

// T-022: Create a new array that combines employee names and department names in the format: "Alice (HR)".
const combinedArray = employees.map((employee) => {
  let deptName = departments.find((dept) => {
    return dept.id === employee.departmentId;
  }).name;
  return { ...employee, deptName: `${employee.name} (${deptName})` };
});
console.log("T-022: ", combinedArray);

// T-023: Find the highest salary among employees.
let highestSalary = employees
  .toSorted((employeePrevious, employeeNext) => {
    return employeePrevious.salary - employeeNext.salary;
  })
  .toReversed()[0];
console.log("T-023: ", highestSalary);

// T-024: Check if there is at least one employee in the "Sales" department.
const SalesEmp = employees.some((employee) => {
  return (
    employee.departmentId ===
    departments.find((dept) => {
      return dept.name === "Sales";
    }).id
  );
});
SalesEmp
  ? console.log(`T-024: There is atleast one employee in the Sales department.`)
  : console.log(`T-024: There is no employee in the Sales department.`);

// T-025: Write a function to filter employees earning more than 6000.
const earningMoreThan6000 = employees.filter((employee) => {
  return employee.salary > 6000;
});
console.log("T-025: ", earningMoreThan6000);

// T-026: Create an array of employee names only.
const empNames = employees.map((employee) => {
  return employee.name;
});
console.log("T-026: ", empNames);

// T-027: Calculate the total salary of all employees using
const totalSalary = employees.reduce(
  (total, employee) => total + employee.salary,
  0
);
console.log(
  `T-027: Total salary of all employees together is Rs${totalSalary}`
);

// T-028: Is there any employee earning less than 5000?
const earningLessThan5000 = employees.some(
  (employee) => employee.salary < 5000
);
earningLessThan5000
  ? console.log(`T-028: Yes, there is an employee earning less than 5000.`)
  : console.log(`T-028: There is no employee earning less than 5000.`);

// T-029: Find the first employee who earns exactly 5100.
const empEarning5100 = employees.find(
  (employee) => employee.salary === 5100
).name;
console.log(`T-029: Employee earning exactly Rs.5100 is ${empEarning5100}.`);

// T-030: Find the last employee in the "HR" department.
const lastHrEmp = employees.findLast((employee) => {
  return (
    employee.departmentId ===
    departments.find((dept) => {
      return dept.name === "HR";
    }).id
  );
}).name;
console.log(`T-030: The last employee in HR is ${lastHrEmp}.`);

// T-031: Find the first employee in the "Marketing" department.
const firstMktEmp = employees.find((employee) => {
  return (
    employee.departmentId ===
    departments.find((dept) => {
      return dept.name === "Marketing";
    }).id
  );
}).name;
console.log(`T-031: The first employee in Marketing is ${firstMktEmp}.`);

// T-032: Check if all employees earn more than 4000.
const allEarnMoreThan4000 = employees.every((employee) => {
  return employee.salary > 4000;
});
allEarnMoreThan4000
  ? console.log(`T-032: All employees earn more than Rs4000.`)
  : console.log(`T-032: Not all employees earn more than Rs4000.`);

// T-033: Find the first employee in the "Sales" and "HR" department.
const firstSalesEmp = employees.find((employee) => {
  return employee.departmentId === 4;
}).name;
const firstHrEmp = employees.find((employee) => {
  return employee.departmentId === 1;
}).name;
console.log(
  `T-033: The first Sales employee is ${firstSalesEmp} and first HR employee is ${firstHrEmp}`
);

// T-034: Verify if all employees belong to a department listed in the departments array.
const allEmpGotDept = employees.every((employee) => {
  return departments
    .map((dept) => {
      return dept.id;
    })
    .includes(employee.departmentId);
});
allEmpGotDept
  ? console.log(
      `T-034: All employees belong to a department listed in the departments array.`
    )
  : console.log(
      `T-034: All employees do not belong to a department listed in the departments array.`
    );

// T-035: Log each employee's name and department name to the console.
console.log("T-035:");
employees.map((employee) =>
  console.log(
    employee.name,
    "is in ",
    departments.find((dept) => {
      return employee.departmentId === dept.id;
    }).name
  )
);

// T-036: Extract all employee names into a single array.
let empNames1 = employees.map((employee) => {
  return employee.name;
});
console.log("T-036: ", empNames1);

// T-037: Increment each employee's salary by 10%
const employeesWithIncreasedSalary = employees.map((employee) => {
  employee.increasedSalary = employee.salary * 0.1 + employee.salary;
  return { ...employee };
});
console.log("T-037: ", employeesWithIncreasedSalary);

// T-038: Assume each employee can have multiple skills. Create an array of employee skills and flatten them.
// Example: [{name: "Alice", skills: ["Excel", "Management"]}, ...].
const skillsList = employees
  .map((employee) => {
    return { name: employee.name, skills: ["Excel", "Management"] };
  })
  .map((person) => {
    return new Array(person.name, person.skills.flat());
  });
console.log("T-038: ", skillsList);

// T-039: Find the total salary of all employees working in the "Engineering" department.
const totalSalaryOfEngEmp = employees.reduce((total, employee) => {
  if (employee.departmentId === 2) {
    return total + employee.salary;
  }
  return total;
}, 0);
console.log("T--039: ", totalSalaryOfEngEmp);

// T-040: Check if there is any department where all employees earn more than 5000.
const newMap = employees.map((employee) => {
  return {
    name: employee.name,
    dept: employee.departmentId,
    salary: employee.salary,
    deptartment: departments.find((dept) => {
      return dept.id === employee.departmentId;
    }).name,
  };
});
const groupedItems = Object.groupBy(newMap, (object) => {
  return object.deptartment;
});
const result2 = Object.values(groupedItems).some((item) => {
  return item.every((empl) => {
    return empl.salary > 5000;
  });
});
console.log("T-040: ", result2);

// T-041: Assume each employee has a projects array (e.g., { id: 1, name: "Alice", projects: ["Project A", "Project B"] }).
// Find the total number of unique projects being handled across all employees.
const projectArray = employees.map((emp) => {
  return { ...emp, projects: ["ProjectA", "ProjectB"] };
});
const result3 = projectArray.reduce((accumulator, currEmp) => {
  return accumulator + currEmp.projects.length;
}, 0);
console.log("T-041: The total number of projects is", result3);

// T-042: For each employee, find their department name and return an array of employee names with their department names.
const empDeptMap = employees.map((emp) => {
  return {
    name: emp.name,
    department: departments.find((dept) => {
      return emp.departmentId === dept.id;
    }).name,
  };
});
console.log("T-042: ", empDeptMap);

//  T-043: Get a list of names of employees earning more than 6000.
const empEarningMoreThan6000 = employees
  .filter((emp) => {
    return emp.salary > 6000;
  })
  .map((emp) => {
    return emp.name;
  });
console.log(
  "T-043: The names of employees earning more than 6000 are",
  empEarningMoreThan6000
);

//  T-044: Write a for-of loop to print the names of all employees from the employees array.
console.log("T-044: names of all employees from the employees array");
employees.forEach((emp) => {
  console.log(emp.name);
});

//  T-045: Using a for-of loop, print the names of employees earning more than 5000.
console.log("T-045: names of employees earning more than 5000");
employees.forEach((emp) => {
  if (emp.salary > 5000) console.log(emp.name);
});

//  T-046: Modify the for-of loop to destructure each employee object and log their name and salary.
console.log("T-046: destructuring");
employees.forEach(({ name, salary }) => {
  console.log(name, salary);
});

//  T-047: Write a for-of loop to match employees with their departments and print the results.
console.log("T-047: matching employees with their departments");
for (let key of employees) {
  let deptName = departments.find((dept) => {
    return key.departmentId === dept.id;
  });
  console.log(`${key.name} is in ${deptName.name} department.`);
}

//  T-048: Use Array.prototype.entries() with a for-of loop to print the index and name of each employee.
console.log("T-048: index and name of each employee");
for (let [index, element] of employees.entries()) {
  console.log(index, element.name);
}
