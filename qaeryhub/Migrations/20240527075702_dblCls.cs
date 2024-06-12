using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace qaeryhub.Migrations
{
    public partial class dblCls : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<double>(
                name: "cumulativeLayoutShift",
                table: "Metrics",
                type: "double precision",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "integer");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<int>(
                name: "cumulativeLayoutShift",
                table: "Metrics",
                type: "integer",
                nullable: false,
                oldClrType: typeof(double),
                oldType: "double precision");
        }
    }
}
