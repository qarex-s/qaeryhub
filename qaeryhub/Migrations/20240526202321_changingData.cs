using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace qaeryhub.Migrations
{
    public partial class changingData : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Name",
                table: "Metrics");

            migrationBuilder.RenameColumn(
                name: "SEOMetric",
                table: "Metrics",
                newName: "totalBlockingTime");

            migrationBuilder.RenameColumn(
                name: "PerformanceMetric",
                table: "Metrics",
                newName: "speedIndex");

            migrationBuilder.RenameColumn(
                name: "CurentValue",
                table: "Metrics",
                newName: "largestContentfulPaint");

            migrationBuilder.RenameColumn(
                name: "BestPracticesMetric",
                table: "Metrics",
                newName: "firstContentfulPaint");

            migrationBuilder.RenameColumn(
                name: "AccessibilityMetric",
                table: "Metrics",
                newName: "cumulativeLayoutShift");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "totalBlockingTime",
                table: "Metrics",
                newName: "SEOMetric");

            migrationBuilder.RenameColumn(
                name: "speedIndex",
                table: "Metrics",
                newName: "PerformanceMetric");

            migrationBuilder.RenameColumn(
                name: "largestContentfulPaint",
                table: "Metrics",
                newName: "CurentValue");

            migrationBuilder.RenameColumn(
                name: "firstContentfulPaint",
                table: "Metrics",
                newName: "BestPracticesMetric");

            migrationBuilder.RenameColumn(
                name: "cumulativeLayoutShift",
                table: "Metrics",
                newName: "AccessibilityMetric");

            migrationBuilder.AddColumn<string>(
                name: "Name",
                table: "Metrics",
                type: "text",
                nullable: false,
                defaultValue: "");
        }
    }
}
