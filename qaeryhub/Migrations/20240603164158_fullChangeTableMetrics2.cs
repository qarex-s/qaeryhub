using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace qaeryhub.Migrations
{
    public partial class fullChangeTableMetrics2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Metrics_Metrics_MetricsId",
                table: "Metrics");

            migrationBuilder.DropIndex(
                name: "IX_Metrics_MetricsId",
                table: "Metrics");

            migrationBuilder.DropColumn(
                name: "MetricsId",
                table: "Metrics");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "MetricsId",
                table: "Metrics",
                type: "integer",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_Metrics_MetricsId",
                table: "Metrics",
                column: "MetricsId");

            migrationBuilder.AddForeignKey(
                name: "FK_Metrics_Metrics_MetricsId",
                table: "Metrics",
                column: "MetricsId",
                principalTable: "Metrics",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
