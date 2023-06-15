const about = "I am a computer science graduate who is passionate about Data. Currently, I'm a BI trainee at ITI. I'm also a graduate of Data Analysis Professional & Advanced Nanodegrees from Udacity. I have good experience in Python, advanced SQL, and SQL BI with more than 10 projects. I'm well-skilled in data analysis and reporting using Power BI and Tableau.";
const imgs_root = "images/";
const profile_img = imgs_root + "profile_img.jpeg"

const projects = [
    {
        "title": "AdventureWorks DWH Story",
        "description": `Story presenting a narrative through interactive dashboards. Includes market, currency, 
                        product, promotion, and customer analysis with advanced tools.`,
        "tool": "Tableau",
        "image": imgs_root + "advanture_works_story_tableau.PNG",
        "date": "June 2023",
        "url": "https://public.tableau.com/app/profile/kawther.ahmed/viz/AdventureWorks_16858995584710/AdventureWorksStory?publish=yes"
    },
    {
        "title": "E-Commerce Dashboard",
        "description": `Interactive visualization includes sales trends, customer demographics, 
                        and product categories. I've used line, bar, and map charts. As well as the use of filters.`,
                        "tool": "Tableau",
        "image": imgs_root + "e-commerce_tableau.PNG",
        "date": "May 2023",
        "url": "https://public.tableau.com/app/profile/kawther.ahmed/viz/E-CommerceData_16849528285550/E-CommerceData?publish=yes"
    },
    {
        "title": "Airlines Delay Dashboard",
        "description": `Analysis of Airlines Delay. Presents key metrics such as the number of cancellations. 
                        Also includes filters to focus on specific aspects of the data.`,
        "tool": "Tableau",
        "image": "placeholder.png",
        "date": "Nov 2022",
        "url": "https://public.tableau.com/app/profile/kawther.ahmed/viz/Project_16680249088290/Cancell?publish=yes"
    },
    {
        "title": "XYZ Product Dashboard",
        "description": `Interactive dashboard includes info on sales and performance metrics 
                        for a product called XYZ and lets users drill down for deeper insights.`,
        "tool": "Tableau",
        "image": imgs_root + "xyz_tableau.PNG",
        "date": "Mar 2023",
        "url": "https://public.tableau.com/app/profile/kawther.ahmed/viz/XYZProduct/Dashboard"
    },
    {
        "title": "AdventureWorks Excel Dashboard",
        "description": `Started by connecting Excel to an SQL server, Built relationships between tables then used pivot tables, slicers, and Excel functions 
                        to analyze the data.`,
        "tool": "Excel",
        "image": imgs_root + "excel_adventureWorks.png",
        "date": "June 2023",
        "url": "#"
    },
    {
        "title": "Kickstarter Projects Dashboard",
        "description": `Comprehensive overview of Kickstarter projects. Designed using Power Query with the 
                        ability to create custom columns using M language and append two files.`,
        "tool": "Power BI",
        "image": imgs_root + "Kickstarter_powerbi.PNG",
        "date": "April 2023",
        "url": "https://www.novypro.com/project/kickstarter-projects-dashboard-power-bi"
    },
    {
        "title": "Sales Dashboard",
        "description": `Dashboard showcases data using a Star Schema, Hierarchy, 
                        and DAX Measures. With the ability to drill down and use a Tooltip Page.`,
        "tool": "Power BI",
        "image": imgs_root + "sales_powerBI.PNG",
        "date": "April 2023",
        "url": "https://www.novypro.com/project/sales-dashboard-power-bi-2"
    },
    {
        "title": "Airlines Delay Dashboard",
        "description": `Interactive dashboard that incorporates various charts and a Star Schema. 
                        With the use of measures, date slicers, tooltips, and drill-through functionality.`,
        "tool": "Power BI",
        "image": imgs_root + "airline_powerbi.PNG",
        "date": "May 2023",
        "url": "https://www.novypro.com/project/airlines-delay-dashboard"
    },
    {
        "title": "Facebook graph API Dashboard",
        "description": `Extracted Facebook posts data to analyze it using date slicer and matrix. 
                        You can extract links, view data from the previous month, and see running totals.`,
        "tool": "Power BI",
        "image": imgs_root + "facebook_powerbi.PNG",
        "date": "May 2023",
        "url": "https://www.novypro.com/project/facebook-graph-api-dashboard"
    },
    {
        "title": "IMDb Top 250 Movies Dashboard",
        "description": `Leverages a live connection to IMDb's API to showcase the top-rated movies. 
                        With real-time data updates, movie ratings, genres, and other key metrics.`,
        "tool": "Power BI",
        "image": imgs_root + "imdb_powerbi.PNG",
        "date": "April 2023",
        "url": "https://www.novypro.com/project/imdb-top-250-movies-dashboard"
    },
];
