// Example data (replace with real backend values later)
  const carData = {
    all: { count: 120, growth: "+10% since last month" },
    sedan: { count: 50, growth: "+5% since last month" },
    suv: { count: 40, growth: "+8% since last month" },
    coup: { count: 30, growth: "+12% since last month" }
  };

  function updateCarCount() {
    const category = document.getElementById("carCategory").value;
    document.getElementById("carCount").innerText = carData[category].count;
    document.getElementById("carGrowth").innerText = carData[category].growth;
  }