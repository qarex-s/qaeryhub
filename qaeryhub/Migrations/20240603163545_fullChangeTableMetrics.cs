using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace qaeryhub.Migrations
{
    public partial class fullChangeTableMetrics : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "cumulativeLayoutShift",
                table: "Metrics");

            migrationBuilder.DropColumn(
                name: "firstContentfulPaint",
                table: "Metrics");

            migrationBuilder.DropColumn(
                name: "largestContentfulPaint",
                table: "Metrics");

            migrationBuilder.DropColumn(
                name: "speedIndex",
                table: "Metrics");

            migrationBuilder.RenameColumn(
                name: "totalBlockingTime",
                table: "Metrics",
                newName: "MetricsId");

            migrationBuilder.AddColumn<float>(
                name: "numericValue",
                table: "Metrics",
                type: "real",
                nullable: false,
                defaultValue: 0f);

            migrationBuilder.AddColumn<float>(
                name: "score",
                table: "Metrics",
                type: "real",
                nullable: false,
                defaultValue: 0f);

            migrationBuilder.AddColumn<string>(
                name: "title",
                table: "Metrics",
                type: "text",
                nullable: false,
                defaultValue: "");

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

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Metrics_Metrics_MetricsId",
                table: "Metrics");

            migrationBuilder.DropIndex(
                name: "IX_Metrics_MetricsId",
                table: "Metrics");

            migrationBuilder.DropColumn(
                name: "numericValue",
                table: "Metrics");

            migrationBuilder.DropColumn(
                name: "score",
                table: "Metrics");

            migrationBuilder.DropColumn(
                name: "title",
                table: "Metrics");

            migrationBuilder.RenameColumn(
                name: "MetricsId",
                table: "Metrics",
                newName: "totalBlockingTime");

            migrationBuilder.AddColumn<double>(
                name: "cumulativeLayoutShift",
                table: "Metrics",
                type: "double precision",
                nullable: false,
                defaultValue: 0.0);

            migrationBuilder.AddColumn<int>(
                name: "firstContentfulPaint",
                table: "Metrics",
                type: "integer",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "largestContentfulPaint",
                table: "Metrics",
                type: "integer",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "speedIndex",
                table: "Metrics",
                type: "integer",
                nullable: false,
                defaultValue: 0);
        }
    }
}
