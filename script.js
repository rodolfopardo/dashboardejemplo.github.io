// Paleta de colores optimizada
const colors = {
  primary: "rgba(52, 152, 219, 0.8)", // Azul
  secondary: "rgba(231, 76, 60, 0.8)", // Rojo
  accent: "rgba(46, 204, 113, 0.8)", // Verde
  highlight: "rgba(241, 196, 15, 0.8)", // Amarillo
  dark: "rgba(44, 62, 80, 0.8)", // Azul oscuro
  light: "rgba(236, 240, 241, 0.8)" // Gris claro
};

// Gráfico de Barras - Impresiones
new Chart(document.getElementById("myChart").getContext("2d"), {
  type: "bar",
  data: {
    labels: [
      "Julio 24",
      "Agosto 24",
      "Septiembre 24",
      "Octubre 24",
      "Noviembre 24",
      "Diciembre 24",
      "Enero 25"
    ],
    datasets: [
      {
        label: "Impresiones",
        backgroundColor: colors.primary,
        borderColor: colors.dark,
        borderWidth: 2,
        data: [330, 784, 900, 289, 983, 1087, 982]
      }
    ]
  },
  options: {
    responsive: true,
    legend: { position: "bottom" },
    title: {
      display: true,
      text: "Serie de tiempo - Impresiones",
      position: "top"
    },
    scales: {
      xAxes: [{ scaleLabel: { display: true, labelString: "Meses del año" } }],
      yAxes: [{ ticks: { beginAtZero: true } }]
    }
  }
});

// Gráfico de Línea - Retención de Audiencia
new Chart(document.getElementById("chart2").getContext("2d"), {
  type: "line",
  data: {
    labels: [
      "Julio 24",
      "Agosto 24",
      "Septiembre 24",
      "Octubre 24",
      "Noviembre 24",
      "Diciembre 24",
      "Enero 25"
    ],
    datasets: [
      {
        label: "Usuarios a 30 días",
        borderColor: colors.primary,
        backgroundColor: colors.primary,
        fill: false,
        data: [173, 198, 232, 200, 245, 290, 200]
      },
      {
        label: "Usuarios a 15 días",
        borderColor: colors.secondary,
        backgroundColor: colors.secondary,
        fill: false,
        data: [500, 430, 487, 200, 201, 209, 50]
      },
      {
        label: "Usuarios diarios",
        borderColor: colors.accent,
        backgroundColor: colors.accent,
        fill: false,
        data: [120, 100, 97, 104, 131, 129, 150]
      }
    ]
  },
  options: {
    responsive: true,
    legend: { position: "bottom" },
    title: { display: true, text: "Retención de Audiencia", position: "top" }
  }
});

// Gráfico de Línea - Productos Populares
new Chart(document.getElementById("chart6").getContext("2d"), {
  type: "line",
  data: {
    labels: [
      "Julio 24",
      "Agosto 24",
      "Septiembre 24",
      "Octubre 24",
      "Noviembre 24",
      "Diciembre 24",
      "Enero 25"
    ],
    datasets: [
      {
        label: "Calzados de hombre",
        borderColor: colors.primary,
        backgroundColor: colors.primary,
        fill: true,
        data: [3000, 5432, 6879, 7943, 9912, 10001, 12732]
      },
      {
        label: "Calzados de mujer",
        borderColor: colors.secondary,
        backgroundColor: colors.secondary,
        fill: true,
        data: [10634, 2393, 3364, 3656, 2496, 2334, 5000]
      },
      {
        label: "Calzados de niños",
        borderColor: colors.highlight,
        backgroundColor: colors.highlight,
        fill: true,
        data: [14676, 8541, 10323, 10318, 10904, 8354, 6700]
      }
    ]
  },
  options: {
    responsive: true,
    legend: { position: "bottom" },
    title: { display: true, text: "Tendencia de Calzados", position: "top" }
  }
});

// Gráfico de Torta - Tipos de Queries
new Chart(document.getElementById("chart3").getContext("2d"), {
  type: "pie",
  data: {
    labels: ["Transaccional", "Informativa", "Marca"],
    datasets: [
      {
        label: "Tipos de Queries",
        backgroundColor: [colors.accent, colors.secondary, colors.primary],
        borderColor: colors.dark,
        data: [70, 10, 60]
      }
    ]
  },
  options: {
    responsive: true,
    legend: { position: "bottom" },
    title: { display: true, text: "Tipos de Queries", position: "top" }
  }
});

// Gráfico de Barras - Preferencia de Productos
new Chart(document.getElementById("chart4").getContext("2d"), {
  type: "bar",
  data: {
    labels: ["Hombre", "Mujer", "Niños"],
    datasets: [
      {
        label: "Productos con preferencia",
        backgroundColor: colors.primary,
        borderColor: colors.dark,
        data: [120, 45, 70]
      },
      {
        label: "Tipos de productos",
        backgroundColor: colors.secondary,
        borderColor: colors.dark,
        data: [28, 190, 50]
      }
    ]
  },
  options: {
    responsive: true,
    legend: { position: "bottom" },
    title: { display: true, text: "Preferencias por Segmento", position: "top" }
  }
});
