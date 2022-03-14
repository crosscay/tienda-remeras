USE [remeras_db]
GO
/****** Object:  Table [dbo].[remera]    Script Date: 14/03/2022 17:02:41 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[remera](
	[remera_id] [int] IDENTITY(1,1) NOT NULL,
	[nombre_remera] [varchar](100) NULL,
	[talla] [varchar](50) NULL,
	[precio] [int] NULL,
	[image] [varchar](100) NULL,
 CONSTRAINT [PK_remera] PRIMARY KEY CLUSTERED 
(
	[remera_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[remera] ON 
GO
INSERT [dbo].[remera] ([remera_id], [nombre_remera], [talla], [precio], [image]) VALUES (1, N'Puma Classics Logo XL Puma White', N'Extra large', 300, N'https://tiendafitness.net/wp-content/uploads/2020/07/137203810.jpg')
GO
INSERT [dbo].[remera] ([remera_id], [nombre_remera], [talla], [precio], [image]) VALUES (2, N'Camiseta Puma Box', N'Extra large', 300, N'https://importennis.com/wp-content/uploads/2021/01/581908-03-600x600.png')
GO
INSERT [dbo].[remera] ([remera_id], [nombre_remera], [talla], [precio], [image]) VALUES (3, N'Camisetas Puma Studio Mesh Cat S Bridal Rose', N'Large', 350, N'https://tiendafitness.net/wp-content/uploads/2020/07/137203077.jpg')
GO
INSERT [dbo].[remera] ([remera_id], [nombre_remera], [talla], [precio], [image]) VALUES (8, N'Remera adidas Linear', N'Medium', 533, N'https://sporting.vteximg.com.br/arquivos/ids/459576-450-450/6GK9637-000-1.jpg?v=637786211899270000')
GO
SET IDENTITY_INSERT [dbo].[remera] OFF
GO
